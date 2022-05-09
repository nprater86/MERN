import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const FetchPeople = props => {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
    },[id]);

    return (
        <div>
            <h1 className="mt-5">{ data.name }</h1>
            <h3 className="mt-5">Height: <span style={{fontWeight: 'normal'}}>{ data.height }</span></h3>
            <h3 className="mt-3">Mass: <span style={{fontWeight: 'normal'}}>{ data.mass }</span></h3>
            <h3 className="mt-3">Hair Color: <span style={{fontWeight: 'normal'}}>{ data.hair_color }</span></h3>
            <h3 className="mt-3">Skin Color: <span style={{fontWeight: 'normal'}}>{ data.skin_color }</span></h3>
        </div>
    );
}

export default FetchPeople;