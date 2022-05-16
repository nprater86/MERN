import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import AuthorForm from '../components/AuthorForm';
import HomeLink from '../components/HomeLink';
import ErrorPage from './ErrorPage';

const UpdateAuthor = props => {
    const { id } = useParams();
    const [author, setAuthor] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [loadErr, setLoadErr] = useState(true);
    const [error, setError] = useState({
        name:""
    });
    const history = useHistory();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res =>{
                setAuthor(res.data.author.name);
                setLoaded(true);
                setLoadErr(false);
            })
            .catch(err => {
                console.error(err)
            });
    },[])

    function updateAuthor(author) {
        setError(error => ({
            ...error,
            name:""
        }));

        axios.put('http://localhost:8000/api/authors/update/' + id, author)
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
            {loaded && !loadErr && (
            <div>
                <h5 className="mt-2">Update author:</h5>
                <AuthorForm onSubmitProp={ updateAuthor } error={error} initialName={ author } />
            </div>
            )}
            {loadErr && <ErrorPage />}
        </div>
    );
}

export default UpdateAuthor;