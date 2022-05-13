import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useHistory } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

const ComponentName = props => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({
        title:"",
        price:"",
        description:""
    });
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    },[]);

    function updateProduct(product) {

        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => {
                console.log(res);
                history.push("/products/" + id)
            })
            .catch(err => {
                console.log(err.response.data.errors);
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

    return (
        <div className="container d-flex flex-column align-items-center">
            <h1 className="text-center">Product Manager</h1>
            { loaded && (
            <div className="w-50 p-4 rounded text-center" style={{backgroundColor: "lightblue"}}>
                <h3>Update Product</h3>
                <ProductForm onSubmitProp={ updateProduct } initialTitle={title} initialPrice={price} initialDescription={description} errors={ errors }/>
                <Link to="/"><button className="btn btn-primary mt-3">Cancel</button></Link>
            </div>
            ) }
        </div>
    );
}

export default ComponentName;