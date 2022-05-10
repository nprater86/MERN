import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const FetchPlanet = props => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
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
                <h3 className="mt-5">Climate: <span style={{fontWeight: 'normal'}}>{ data.climate }</span></h3>
                <h3 className="mt-3">Terrain: <span style={{fontWeight: 'normal'}}>{ data.terrain }</span></h3>
                <h3 className="mt-3">Surface Water: <span style={{fontWeight: 'normal'}}>{ data.surface_water }</span></h3>
                <h3 className="mt-3">Population: <span style={{fontWeight: 'normal'}}>{ isNaN(parseInt(data.population)) ? data.population : parseInt(data.population).toLocaleString('en-US') }</span></h3>
            </div>
            }
        </div>
    );
}

export default FetchPlanet;