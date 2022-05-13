import React from 'react';
import axios from 'axios';

const Delete = props => {
    const { id, successCallback } = props;
    
    function handleDelete(e,id){
        e.preventDefault();

        axios.delete("http://localhost:8000/api/products/delete/" + id)
            .then(res => {
                console.log(res);
                successCallback();
            })
            .catch(err => console.error(err));
    }

    return (
        <a className="nav-link" href="#" onClick={ e => handleDelete(e, id) }>Delete</a>
    )
}

export default Delete;