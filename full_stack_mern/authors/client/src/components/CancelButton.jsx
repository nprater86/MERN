import React from 'react';
import { Link } from 'react-router-dom';

const CancelButton = props => {
    return (
        <div>
            <Link to="/"><button className="btn btn-primary">Cancel</button></Link>
        </div>
    );
}

export default CancelButton;