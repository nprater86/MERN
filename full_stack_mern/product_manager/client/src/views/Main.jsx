import React from 'react';
import ProductForm from '../components/ProductForm';

const Main = props => {
    return (
        <div className="container d-flex justify-content-center">
            <div className="row">
                <ProductForm />
            </div>
        </div>
    );
}

export default Main;