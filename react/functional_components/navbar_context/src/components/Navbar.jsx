import React, { useContext } from 'react';
import Name from '../context/Name';

const Navbar = props => {
    const nameContext = useContext(Name);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <h1 class="navbar-brand">Hello {nameContext.name}!</h1>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;