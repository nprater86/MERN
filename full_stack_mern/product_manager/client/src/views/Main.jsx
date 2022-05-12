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
    },[products]);

    return (
        <div className="container d-flex flex-column">
            <div className="row mb-5 d-flex justify-content-center">
                <ProductForm />
            </div>
            <div className="row mb-5 d-flex justify-content-center">
                { loaded && <ProductList products={ products }/> }
            </div>
        </div>
    );
}

export default Main;