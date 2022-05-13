import React, { useState } from 'react';
import CancelButton from './CancelButton';

const AuthorForm = props => {
    const [name, setName] = useState(props.initialName);

    function onSubmitHandler(e){
        e.preventDefault();
        props.onSubmitProp({name})
    }

    return (
        <div className="w-50 p-3 rounded" style={{backgroundColor: 'lightblue'}}>
            <form onSubmit={ e => onSubmitHandler(e) }>
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input type="text" className="form-control" value={ name } onChange={ (e) => setName(e.target.value) } />
                    <p style={{color:'red', fontWeight:'bold'}}>{props.error.name}</p>
                </div>
                <div className="d-flex">
                    <CancelButton />
                    <button className="btn btn-primary ms-2" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AuthorForm;