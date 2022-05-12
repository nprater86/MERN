import React from 'react';

const RenderSpecies = props => {
    return (
        <div>
            <h1 className="mt-5">{ props.data.name }</h1>
            <h3 className="mt-5">Classification: <span style={{fontWeight: 'normal'}}>{ props.data.classification }</span></h3>
            <h3 className="mt-3">Average Lifespan: <span style={{fontWeight: 'normal'}}>{ props.data.average_lifespan }</span></h3>
            <h3 className="mt-3">Average Height: <span style={{fontWeight: 'normal'}}>{ props.data.average_height }</span></h3>
            <h3 className="mt-3">Eye Colors: <span style={{fontWeight: 'normal'}}>{ props.data.eye_colors }</span></h3>
            <h3 className="mt-3">Hair Colors: <span style={{fontWeight: 'normal'}}>{ props.data.hair_colors }</span></h3>
            <h3 className="mt-3">Designation: <span style={{fontWeight: 'normal'}}>{ props.data.designation }</span></h3>
            <h3 className="mt-3">Language: <span style={{fontWeight: 'normal'}}>{ props.data.language }</span></h3>
        </div>
    );
}

export default RenderSpecies;