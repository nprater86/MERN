import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const Form = props => {
    const [selection, setSelection] = useState("");
    const [selectionError, setSelectionError] = useState(false);
    const [id, setId] = useState("");
    const [idError, setIdError] = useState(false);
    const history = useHistory();
    
    function submitHandler(e){
        e.preventDefault();

        if (id === ""){
            setIdError(true)
        } else {
            setIdError(false);
        }

        if (selection === ""){
            setSelectionError(true);
        } else {
            setSelectionError(false);
        }

        if(!selectionError && !idError){
            if(selection === "people"){
                history.push(`/people/${id}`);
            } else if (selection === "planets"){
                history.push(`/planets/${id}`);
            }
        }
    }

    return (
        <div>
            <form className="row row-cols-lg-auto g-3 align-items-center" onSubmit={ e => submitHandler(e) }>
                <div className="col-auto">
                    <div className="row">
                        <label className="col-auto col-form-label">Search For: </label>
                        <div className="col-auto">
                            <select className="form-select" onChange={ e => setSelection(e.target.value) } value={ selection } required>
                                <option value="">Choose...</option>
                                <option value="planets">Planets</option>
                                <option value="people">People</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="row">
                        <label className="col-auto col-form-label">ID: </label>
                        <div className="col-7">
                            <input className="form-control" type="number" onChange={ e => setId(e.target.value) } value={ id } required/>
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </form>
        </div>
    );
}

export default Form;