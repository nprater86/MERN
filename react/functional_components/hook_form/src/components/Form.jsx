import React, { useState } from 'react';
import styles from './modules/Form.module.css';

const Form = props => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const createUser = e => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, passwordConfirmation };
        if (firstName.length < 2) {
            setFirstNameError("First name must be at least 2 characters.");
        } else {
            setFirstNameError("");
        }
        if (lastName.length < 2) {
            setLastNameError("Last name must be at least 2 characters.");
        } else {
            setLastNameError("");
        }
        if (email.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }
        if (password != passwordConfirmation){
            setPasswordError("Passwords much match.");
        } else if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters.");
        } else {
            setPasswordError("");
        }
        
    };

    return (
        <div>
            <form className={ styles.form } onSubmit={ createUser }>
                <div className={ styles.formWrap} >
                    <label>First Name: </label>
                    <input type="text" onChange={ e => setFirstName(e.target.value) }/>
                </div>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
                <div className={ styles.formWrap }>
                    <label>Last Name: </label>
                    <input type="text" onChange={ e => setLastName(e.target.value) }/>
                </div>
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
                <div className={ styles.formWrap }>
                    <label>Email: </label>
                    <input type="email" onChange={ e => setEmail(e.target.value) }/>
                </div>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
                <div className={ styles.formWrap }>
                    <label>Password: </label>
                    <input type="password" onChange={ e => setPassword(e.target.value) }/>
                </div>
                <div className={ styles.formWrap }>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ e => setPasswordConfirmation(e.target.value) }/>
                </div>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
                <input type="submit" value="Create User" />
            </form>
            <p>First name: { firstName }</p>
            <p>Last name: { lastName }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
            <p>Confirm Password: { passwordConfirmation }</p>
        </div>
    );
}

export default Form;