import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

const FetchPeople = props => {
    const { id } = useParams();
    const [personData, setPersonData] = useState({});
    const [homeworldData, setHomeworldData] = useState({});
    const [error, setError] = useState(false);
    const history = useHistory();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                setError(false);
                setPersonData(res.data);
                axios.get(res.data.homeworld)
                    .then(res => {
                        setError(false);
                        setHomeworldData(res.data);
                    })
                    .catch(err=>{
                        console.log(err);
                        setError(true);
                    })
            })
            .catch(err=>{
                console.log(err);
                setError(true);
            })
    },[id]);

    function handleLink(e){
        e.preventDefault();
        let homeWorldUrl = homeworldData.url;
        let homeWorldID = homeWorldUrl.slice(30,homeWorldUrl.length-1);
        history.push(`/planets/${homeWorldID}`)
    }

    return (
        <div>
            {
                error ?
                <img className="mt-5" src="https://y.yarn.co/069f448f-8b5d-4813-82cf-70dd7db9fcdc_text.gif" alt="These aren't the droids you're looking for." /> :
                <div>
                    <h1 className="mt-5">{ personData.name }</h1>
                    <h3 className="mt-5">Homeworld: <a href="#" onClick={ e => handleLink(e) } style={{fontWeight: 'normal'}}>{ homeworldData.name }</a></h3>
                    <h3 className="mt-3">Height: <span style={{fontWeight: 'normal'}}>{ personData.height }</span></h3>
                    <h3 className="mt-3">Mass: <span style={{fontWeight: 'normal'}}>{ personData.mass }</span></h3>
                    <h3 className="mt-3">Hair Color: <span style={{fontWeight: 'normal'}}>{ personData.hair_color }</span></h3>
                    <h3 className="mt-3">Skin Color: <span style={{fontWeight: 'normal'}}>{ personData.skin_color }</span></h3>
                </div>
            }
        </div>
    );
}

export default FetchPeople;