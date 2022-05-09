import React from 'react';
import { useParams } from 'react-router';

const Input = props => {
    const { input } = useParams();
    return (
        <div>
            {
                isNaN(+input) ?
                <h1>The word is: { input }</h1> :
                <h1>The number is: { input }</h1>
            }
        </div>
    );
}

export default Input;