import React, { useState } from 'react';

const ComponentName = props => {
    function handleDeleteClick(deletedI){
        props.onDelete(deletedI);
    }

    function handleCheckedBox(checkedI){
        props.onCheck(checkedI);
    }
    
    return (
        <div>
            <h1>Tasks:</h1>
            <div>
            { props.tasks.map( (task,i) =>
                <div className="form-check" key={i}>
                    <input onChange = { e => handleCheckedBox(i) } className="form-check-input me-2" type="checkbox" checked={task.checked} />
                    { 
                        task.checked ?
                        <label className="form-check-label me-2" htmlFor=""><del>{ task.content }</del></label> :
                        <label className="form-check-label me-2" htmlFor="">{ task.content }</label>
                    }
                    <button onClick={ e => handleDeleteClick(i) } className="btn btn-dark btn-sm">Delete</button>
                    <br />
                </div>
            )}
            </div>
        </div>
    );
}

export default ComponentName;