import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = props => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const addToDom = product => {
        setProducts(products => [...products, product])
    }

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    return (
        <div className="container d-flex flex-column">
            <div className="row mb-5 d-flex justify-content-center">
                <h1 className="text-center">Product Manager</h1>
                <ProductForm addToDom={ addToDom }/>
            </div>
            <div className="row mb-5 d-flex justify-content-center">
                { loaded && <ProductList products={ products } removeFromDom={ removeFromDom } /> }
            </div>
        </div>
    );
}

export default Main;