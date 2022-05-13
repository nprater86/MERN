import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = props => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({
        title:"",
        price:"",
        description:""
    });

    useEffect( () => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products/new', product)
            .then(res => {
                console.log(res);
                setProducts(products => [...products, res.data.product]);
                setErrors(errors => ({
                    ...errors,
                    title: "",
                    price: "",
                    description: ""
                }));
            })
            .catch(err => {
                setErrors(errors => ({
                    ...errors,
                    title: "",
                    price: "",
                    description: ""
                }));
                if (err.response.data.errors.title) {
                    setErrors(errors => ({
                        ...errors,
                        title: err.response.data.errors.title.message
                    }))
                }
                if (err.response.data.errors.price) {
                    setErrors(errors => ({
                        ...errors,
                        price: err.response.data.errors.price.message
                    }))
                }
                if (err.response.data.errors.description) {
                    setErrors(errors => ({
                        ...errors,
                        description: err.response.data.errors.description.message
                    }))
                }
            });
    }

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    return (
        <div className="container d-flex flex-column">
            <div className="row mb-5 d-flex justify-content-center">
            <h1 className="text-center">Product Manager</h1>
                <div className="w-50 p-4 rounded text-center" style={{backgroundColor: "lightblue"}}>
                    <h3 className="text-center">Create Product</h3>
                    <ProductForm onSubmitProp={ createProduct } initialTitle="" initialPrice="" initialDescription="" errors={ errors }/>
                </div>
            </div>
            <div className="row mb-5 d-flex justify-content-center">
                { loaded && <ProductList products={ products } removeFromDom={ removeFromDom } /> }
            </div>
        </div>
    );
}

export default Main;