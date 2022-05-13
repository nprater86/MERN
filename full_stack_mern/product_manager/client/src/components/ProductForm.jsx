import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = props => {
    const { initialTitle, initialPrice, initialDescription } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    function onSubmitHandler(e) {
        e.preventDefault();

        props.onSubmitProp({
            title,
            price,
            description
        });

        setTitle("");
        setPrice("");
        setDescription("");
    }

    return (
        <div>
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default ProductForm;