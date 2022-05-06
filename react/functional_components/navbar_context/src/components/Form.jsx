import React, {useContext} from 'react';
import Name from '../context/Name';

const Form = props => {
    const nameContext = useContext(Name);

    return (
        <div>
            <div className="container mt-3">
                <form>
                    <div className="row">
                        <label className="col-sm-2 col-form-label" htmlFor="firstName">Your name:</label>
                        <div className="col-sm-3">
                            <input className="form-control" type="text" onChange={ e => nameContext.setName(e.target.value) } />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;