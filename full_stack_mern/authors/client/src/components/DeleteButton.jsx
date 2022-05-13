import React from 'react';
import axios from 'axios';

const ComponentName = props => {
    const { id, successCallback } = props;

    function handleDelete(){
        axios.delete('http://localhost:8000/api/authors/delete/' + id)
            .then(res => {
                console.log(res);
                successCallback();
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <button className="btn btn-danger" onClick={ handleDelete }>Delete</button>
        </div>
    );
}

export default ComponentName;