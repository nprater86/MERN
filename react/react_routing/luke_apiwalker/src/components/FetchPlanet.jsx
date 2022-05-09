import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const FetchPlanet = props => {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
    },[id]);

    return (
        <div>
            <h1 className="mt-5">{ data.name }</h1>
            <h3 className="mt-5">Climate: <span style={{fontWeight: 'normal'}}>{ data.climate }</span></h3>
            <h3 className="mt-3">Terrain: <span style={{fontWeight: 'normal'}}>{ data.terrain }</span></h3>
            <h3 className="mt-3">Surface Water: <span style={{fontWeight: 'normal'}}>{ data.surface_water }</span></h3>
            <h3 className="mt-3">Population: <span style={{fontWeight: 'normal'}}>{ parseInt(data.population).toLocaleString('en-US') }</span></h3>
        </div>
    );
}

export default FetchPlanet;