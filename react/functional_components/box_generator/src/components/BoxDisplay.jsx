import React from 'react';
import styles from './modules/BoxDisplay.module.css';

const BoxDisplay = props => {
    return (
        <div>
            <h1>Boxes:</h1>
            <div className={ styles.boxes }>
                { props.drawBoxes.map( (box, i) => {
                    console.log(box);
                    return <div key={i} style={ box }></div>;
                })}
            </div>
        </div>
    );
}

export default BoxDisplay;