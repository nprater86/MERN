import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const FetchPlanet = props => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/species/${id}`)
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
                <h3 className="mt-5">Classification: <span style={{fontWeight: 'normal'}}>{ data.classification }</span></h3>
                <h3 className="mt-3">Average Lifespan: <span style={{fontWeight: 'normal'}}>{ data.average_lifespan }</span></h3>
                <h3 className="mt-3">Average Height: <span style={{fontWeight: 'normal'}}>{ data.average_height }</span></h3>
                <h3 className="mt-3">Eye Colors: <span style={{fontWeight: 'normal'}}>{ data.eye_colors }</span></h3>
                <h3 className="mt-3">Hair Colors: <span style={{fontWeight: 'normal'}}>{ data.hair_colors }</span></h3>
                <h3 className="mt-3">Designation: <span style={{fontWeight: 'normal'}}>{ data.designation }</span></h3>
                <h3 className="mt-3">Language: <span style={{fontWeight: 'normal'}}>{ data.language }</span></h3>
            </div>
            }
        </div>
    );
}

export default FetchPlanet;