import React from 'react';
import { useParams } from 'react-router';

const ComponentName = props => {
    const { word } = useParams();
    const { color1 } = useParams();
    const { color2 } = useParams();

    return (
        <div>
            <h1 style={{ color: color1, backgroundColor: color2 }}>{ word }</h1>
        </div>
    );
}

export default ComponentName;