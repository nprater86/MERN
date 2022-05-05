import React, { useReducer } from 'react';
import styles from './modules/BoxForm.module.css';

const initialState = {
    backgroundColor: {
        value: '',
        error: null
    },
    height: {
        value: '',
        error: null
    },
    width: {
        value: '',
        error: null
    }
}

function reducer(state, action) {
    return {
        ...state,
        [action.type]: {
            value: action.payload,
            error: action.error
        }
    };
}

const BoxForm = props => {
    const [state,dispatch] = useReducer(reducer,initialState);

    const handleBackgroundColor = e => {
        const {name,value} = e.target;
        let error = null;
        if (value.length < 3){
            error = "Background Color must be at least 3 characters.";
        }
        dispatch({
            type: name,
            payload: value,
            error: error,
        })
    }

    const handleDimension = e => {
        const {name,value} = e.target;
        let error = null;
        if (value === '0'){
            error = "Dimensions must be greater than 0."
        }
        dispatch({
            type: name,
            payload: value,
            error: error
        })
    }

    const createBox = e => {
        e.preventDefault();
        if(state.backgroundColor.error === null && state.height.error === null && state.width.error === null){
            const box = {
                backgroundColor: state.backgroundColor.value,
                height: `${state.height.value}px`,
                width: `${state.width.value}px`
            };
            props.onNewBox(box);
            dispatch({
                type: 'backgroundColor',
                payload: '',
                error: null
            })
            dispatch({
                type: 'height',
                payload: '',
                error: null
            })
            dispatch({
                type: 'width',
                payload: '',
                error: null
            })
        }
    }

    return (
        <form className="form-inline" onSubmit={ createBox }>
            <label className="sr-only" htmlFor="backgroundColor">Color: </label>
            <input className="form-control" id="backgroundColor" type="text" name="backgroundColor" value={state.backgroundColor.value} onChange={ handleBackgroundColor } />
            {state.backgroundColor.error !== null && (
                <p className="error">{state.backgroundColor.error}</p>
            )}
            <div className="form-group">
                <label>Height: </label>
                <input className="form-control" type="number" name="height" value={state.height.value} onChange={ handleDimension } />
                {state.height.error !== null && (
                    <p className="error">{state.height.error}</p>
                )}
            </div>
            <div className="form-group">
                <label>Width: </label>
                <input className="form-control" type="number" name="width" value={state.width.value} onChange={ handleDimension } />
                {state.width.error !== null && (
                    <p className="error">{state.width.error}</p>
                )}
            </div>
            <input className="btn btn-success mt-2" type="submit" value="Add" />
        </form>
    );
}

export default BoxForm;