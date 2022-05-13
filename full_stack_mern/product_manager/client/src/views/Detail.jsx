import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useHistory } from "react-router-dom";
import Delete from '../components/Delete';

const Detail = props => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    },[])

    return (
        <div className="container d-flex justify-content-center">
            <div className="row p-5 border w-50">
                <div className="col">
                    <h1 className="mb-3">{ product.title }</h1>
                    <h3 className="mb-3">Price: ${ parseFloat(product.price).toLocaleString("en-US", {minimumFractionDigits:2})}</h3>
                    <h3 className="mb-3">Description:</h3>
                    <p className="mb-3">{ product.description }</p>
                    <nav className="nav d-flex justify-content-between">
                        <Link className="nav-link" to="/">Go Back</Link>
                        <Link className="nav-link" to={ "/products/" + id + "/edit"}>Edit</Link>
                        <Delete id={id} successCallback={ () => history.push("/") } />
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Detail;