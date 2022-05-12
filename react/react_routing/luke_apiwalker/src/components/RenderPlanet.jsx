import React from 'react';

const RenderPlanet = props => {
    return (
        <div>
            <h1 className="mt-5">{ props.data.name }</h1>
            <h3 className="mt-5">Climate: <span style={{fontWeight: 'normal'}}>{ props.data.climate }</span></h3>
            <h3 className="mt-3">Terrain: <span style={{fontWeight: 'normal'}}>{ props.data.terrain }</span></h3>
            <h3 className="mt-3">Surface Water: <span style={{fontWeight: 'normal'}}>{ props.data.surface_water }</span></h3>
            <h3 className="mt-3">Population: <span style={{fontWeight: 'normal'}}>{ isNaN(parseInt(props.data.population)) ? props.data.population : parseInt(props.data.population).toLocaleString('en-US') }</span></h3>
        </div>
    );
}

export default RenderPlanet;