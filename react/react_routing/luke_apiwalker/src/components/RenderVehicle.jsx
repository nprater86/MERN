import React from 'react';

const RenderVehicle = props => {
    return (
        <div>
            <h1 className="mt-5">{ props.data.name }</h1>
            <h3 className="mt-5">Model: <span style={{fontWeight: 'normal'}}>{ props.data.model }</span></h3>
            <h3 className="mt-3">Manufacturer: <span style={{fontWeight: 'normal'}}>{ props.data.manufacturer }</span></h3>
            <h3 className="mt-3">Cost in Credits: <span style={{fontWeight: 'normal'}}>{ parseInt(props.data.cost_in_credits).toLocaleString('en-US') }</span></h3>
            <h3 className="mt-3">Passengers: <span style={{fontWeight: 'normal'}}>{ parseInt(props.data.passengers).toLocaleString('en-US') }</span></h3>
            <h3 className="mt-3">Cargo Capacity: <span style={{fontWeight: 'normal'}}>{ parseInt(props.data.cargo_capacity).toLocaleString('en-US') }</span></h3>
            <h3 className="mt-3">Max Speed in Atmosphere: <span style={{fontWeight: 'normal'}}>{ parseInt(props.data.max_atmosphering_speed).toLocaleString('en-US') }</span></h3>
            <h3 className="mt-3">Vehicle Class: <span style={{fontWeight: 'normal'}}>{ props.data.vehicle_class }</span></h3>
        </div>
    );
}

export default RenderVehicle;