import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useHistory } from 'react-router-dom';

const ComponentName = props => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    },[]);

    function handleUpdate(e) {
        e.preventDefault();

        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                history.push("/products/" + id)
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="w-50 p-5 rounded text-center" style={{backgroundColor: "lightblue"}}>
                <h1>Update Product</h1>
                <form className="mt-3 text-start" onSubmit={ e => handleUpdate(e) }>
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
                    <div className="text-center d-flex flex-column align-items-center">
                        <button type="submit" className="btn btn-primary mb-3">Update</button>
                        <Link to="/"><button className="btn btn-primary">Cancel</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ComponentName;