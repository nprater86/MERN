import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const FetchStarships = props => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(res => {
                setError(false);
                setData(res.data);
            })
            .catch(err=>{
                console.log(err);
                setError(true);
            })
    },[id]);

    return (
        <div>
            {
            error ?
            <img className="mt-5" src="https://y.yarn.co/069f448f-8b5d-4813-82cf-70dd7db9fcdc_text.gif" alt="These aren't the droids you're looking for." /> :
            <div>
                <h1 className="mt-5">{ data.name }</h1>
                <h3 className="mt-5">Model: <span style={{fontWeight: 'normal'}}>{ data.model }</span></h3>
                <h3 className="mt-3">Manufacturer: <span style={{fontWeight: 'normal'}}>{ data.manufacturer }</span></h3>
                <h3 className="mt-3">Cost in Credits: <span style={{fontWeight: 'normal'}}>{ parseInt(data.cost_in_credits).toLocaleString('en-US') }</span></h3>
                <h3 className="mt-3">Passengers: <span style={{fontWeight: 'normal'}}>{ parseInt(data.passengers).toLocaleString('en-US') }</span></h3>
                <h3 className="mt-3">Cargo Capacity: <span style={{fontWeight: 'normal'}}>{ parseInt(data.cargo_capacity).toLocaleString('en-US') }</span></h3>
                <h3 className="mt-3">Max Speed in Atmosphere: <span style={{fontWeight: 'normal'}}>{ parseInt(data.max_atmosphering_speed).toLocaleString('en-US') }</span></h3>
                <h3 className="mt-3">Hyperdrive Rating: <span style={{fontWeight: 'normal'}}>{ parseInt(data.hyperdrive_rating).toLocaleString('en-US') }</span></h3>
            </div>
            }
        </div>
    );
}

export default FetchStarships;