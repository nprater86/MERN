import React from 'react';
import { Link } from 'react-router-dom';
import CancelButton from '../components/CancelButton';

const ErrorPage = props => {
    return (
        <div>
            <h5>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</h5>
                <div className="d-flex mt-3">
                    <CancelButton />
                    <Link to="/new"><button className="btn btn-primary ms-2">Add</button></Link>
                </div>
        </div>
    );
}

export default ErrorPage;