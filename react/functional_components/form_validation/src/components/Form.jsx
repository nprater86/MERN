import React, { useReducer } from 'react';

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: {
            value: action.payload,
            error: action.error
        }
    };
}

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChangeFirstName(e) {
        const { name, value } = e.target;
        let error = null;
        if (e.target.value.length < 2) {
            error = "First name must be at least 2 characters."
        }
        if (e.target.value.trim() === "") {
            error = null;
        }
        dispatch({
            type: name,
            payload: value,
            error: error
        });
    }

    function handleChangeLastName(e) {
        const { name, value } = e.target;
        let error = null;
        if (e.target.value.length < 2) {
            error = "First name must be at least 2 characters."
        }
        if (e.target.value.trim() === "") {
            error = null;
        }
        dispatch({
            type: name,
            payload: value,
            error: error
        });
    }

    function handleChangeEmail(e) {
        const { name, value } = e.target;
        let error = null;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value) === false) {
            error = "Invalid email address"
        }
        if (e.target.value.trim() === "") {
            error = null;
        }
        dispatch({
            type: name,
            payload: value,
            error: error
        });
    }

    return (
        <div>
            { JSON.stringify(state) }
            <div>
                <label>
                    <span>First Name: </span>{' '}
                    <input
                        name="firstName"
                        value={ state.firstName.value }
                        onChange={ handleChangeFirstName }
                    />
                </label>
                { state.firstName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                )}
            </div>
            <div>
                <label>
                    <span>Last Name: </span>{' '}
                    <input
                        name="lastName"
                        value={ state.lastName.value }
                        onChange={ handleChangeLastName }
                    />
                </label>
                { state.lastName.error !== null && (
                    <p className="error">{ state.lastName.error }</p>
                )}
            </div>
            <div>
                <label>
                    <span>Email: </span>{' '}
                    <input
                        name="email"
                        value={ state.email.value }
                        onChange={ handleChangeEmail }
                    />
                </label>
                { state.email.error !== null && (
                    <p className="error">{ state.email.error }</p>
                )}
            </div>
        </div>
    )
}

export default Form;