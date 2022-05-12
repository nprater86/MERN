import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Detail = props => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    },[id])


    return (
        <div className="container d-flex justify-content-center">
            <div className="row border w-25">
                <div className="col">
                    <h1 className="mb-3">{ product.title }</h1>
                    <h3 className="mb-3">Price: ${ parseFloat(product.price).toLocaleString("en-US")}</h3>
                    <h3 className="mb-3">Description:</h3>
                    <p className="mb-3">{ product.description }</p>
                    <Link to="/products">Go Back</Link>
                </div>
            </div>
        </div>
    );
}

export default Detail;