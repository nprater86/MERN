import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
import HomeLink from '../components/HomeLink';

const AddAuthor = props => {
    const [error, setError] = useState({
        name:""
    });
    const history = useHistory();

    function createAuthor(author) {
        setError(error => ({
            ...error,
            name:""
        }));

        axios.post('http://localhost:8000/api/authors/new', author)
            .then(res => {
                console.log(res);
                history.push("/");
            })
            .catch(err => {
                console.log(err.response.data.errors.name.message);
                setError(error => ({
                    ...error,
                    name:err.response.data.errors.name.message
                }));
            })
    }

    return (
        <div>
            <HomeLink />
            <h5 className="mt-2">Add a new author:</h5> 
            <AuthorForm onSubmitProp={ createAuthor } error={error} initialName="" />
        </div>
    );
}

export default AddAuthor;