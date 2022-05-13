import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Delete from './Delete';

const ProductList = props => {
    const { removeFromDom } = props;

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
                                        <Delete  id={ product._id } successCallback={ () =>  removeFromDom(product._id) } />
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