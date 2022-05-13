import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AuthorList from '../components/AuthorList';

const Main = props => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res =>{
                setAuthors(res.data.authors.sort( (a,b) => a.name.localeCompare(b.name)));
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[])

    function removeFromDom(id){
        setAuthors(authors.filter(author => author._id != id));
    }

    return (
        <div>
            <Link to="/new">Add an author</Link>
            <h5 className="mt-2">We have quotes by:</h5>
            {loaded && <AuthorList removeFromDom={ removeFromDom } authors={authors} />}
        </div>
    );
}

export default Main;