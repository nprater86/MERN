import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const AuthorList = props => {
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.authors.map((author, i) => {
                            return(
                                <tr key={i}>
                                    <th scope="row">{i+1}</th>
                                    <td>{ author.name }</td>
                                    <td>
                                        <div className="d-flex">
                                            <Link to={"/edit/" + author._id}><button className="btn btn-primary me-2">Edit</button></Link>
                                            <DeleteButton id={ author._id } successCallback={ () => props.removeFromDom(author._id) } />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AuthorList;