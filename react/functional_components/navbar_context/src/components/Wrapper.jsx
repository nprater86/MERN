import React, { useState } from 'react';
import Name from '../context/Name';

const Wrapper = props => {
    const [name, setName] = useState("");

    return (
        <div>
            <Name.Provider value={{name,setName}}>
                { props.children }
            </Name.Provider>
        </div>
    );
}

export default Wrapper;