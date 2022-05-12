import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = props => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    function onSubmitHandler(e) {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                props.addToDom(res.data.product);
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="w-50 p-5 rounded text-center" style={{backgroundColor: "lightblue"}}>
            <h2>New Product:</h2>
            <form className="mt-3 text-start" onSubmit={ e => onSubmitHandler(e) }>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" placeholder="Title" onChange={ e => setTitle(e.target.value) } value={ title }/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input type="number" className="form-control" placeholder="0.00" onChange={ e => setPrice(e.target.value) } value={ price }/>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" placeholder="Description" onChange={ e => setDescription(e.target.value) } value={ description } rows="5"></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    );
}

export default ProductForm;