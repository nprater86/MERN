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
            .catch(err => console.error(err));
    }

    return (
        <div className="container d-flex flex-column align-items-center">
            <h1 className="text-center">Product Manager</h1>
            { loaded && (
            <div className="w-50 p-4 rounded text-center" style={{backgroundColor: "lightblue"}}>
                <h3>Update Product</h3>
                <ProductForm onSubmitProp={ updateProduct } initialTitle={title} initialPrice={price} initialDescription={description}/>
                <Link to="/"><button className="btn btn-primary mt-3">Cancel</button></Link>
            </div>
            ) }
        </div>
    );
}

export default ComponentName;