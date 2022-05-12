import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = props => {
    const { removeFromDom } = props;

    function handleDelete(e, id) {
        e.preventDefault();

        axios.delete("http://localhost:8000/api/products/delete/" + id)
            .then(res => {
                console.log(res);
                removeFromDom(id);
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="w-50 text-center">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map( (product,i) => {
                        return (
                            <tr key={i}>
                                <td className="align-middle">{ product.title }</td>
                                <td className="d-flex justify-content-center">
                                    <nav className="nav">
                                        <Link className="nav-link" to={ "/products/" + product._id }>View</Link>
                                        <Link className="nav-link" to={ "/products/" + product._id + "/edit"}>Edit</Link>
                                        <a className="nav-link" href="#" onClick={ e => handleDelete(e, product._id) }>Delete</a>
                                    </nav>
                                </td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;