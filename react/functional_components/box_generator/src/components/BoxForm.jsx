import React, { useState } from 'react';
import styles from './modules/BoxForm.module.css';

const BoxForm = props => {
    const [backgroundColor, setBackgroundColor] = useState("");
    const [height, setHeight] = useState(50);
    const [width, setWidth] = useState(50);

    const createBox = e => {
        e.preventDefault();
        const box = { 
            backgroundColor: `${backgroundColor}`,
            height: `${height}px`,
            width: `${width}px`
        };
        props.onNewBox( box );
        e.target.reset();
    }

    return (
        <form className={ styles.form } onSubmit={ createBox }>
            <div>
                <label>Color: </label>
                <input type="text" onChange={ e => setBackgroundColor(e.target.value) } />
            </div>
            <div>
                <label>Height: </label>
                <input type="number" onChange={ e => setHeight(e.target.value) } />
            </div>
            <div>
                <label>Width: </label>
                <input type="number" onChange={ e => setWidth(e.target.value) } />
            </div>
            <input type="submit" value="Add" />
        </form>
    );
}

export default BoxForm;