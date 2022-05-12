import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = props => {
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
                                <td>{ product.title }</td>
                                <td><Link to={ "/products/" + product._id }>View</Link></td>
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