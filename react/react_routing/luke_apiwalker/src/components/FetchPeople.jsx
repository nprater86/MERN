import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

const FetchPeople = props => {
    const { id } = useParams();
    const [personData, setPersonData] = useState({});
    const [homeworldData, setHomeworldData] = useState({});
    const [speciesData, setSpeciesData] = useState({});
    const [error, setError] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setPersonData({});
        setHomeworldData({});
        setSpeciesData({});
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
                        console.log("Planet error!");
                        console.log(err);
                        setError(true);
                    })
                if(res.data.species.length > 0) {
                    axios.get(res.data.species)
                        .then(res => {
                            setError(false);
                            setSpeciesData(res.data);
                        })
                        .catch(err=>{
                            console.log("Species error!");
                            console.log(err);
                            setError(true);
                        })
                }
            })
            .catch(err=>{
                console.log("Person error!");
                console.log(err);
                setError(true);
            })
    },[id]);

    function handleLink(e, data){
        e.preventDefault();
        let url = data.url;
        let urlID = url.slice(22, url.length-1);
        history.push(`/${urlID}`)
    }

    return (
        <div>
            {
                error ?
                <img className="mt-5" src="https://y.yarn.co/069f448f-8b5d-4813-82cf-70dd7db9fcdc_text.gif" alt="These aren't the droids you're looking for." /> :
                <div>
                    <h1 className="mt-5">{ personData.name }</h1>
                    <h3 className="mt-5">Homeworld: <a href="#" onClick={ (e)  => handleLink(e, homeworldData) } style={{fontWeight: 'normal'}}>{ homeworldData.name }</a></h3>
                    <h3 className="mt-3">Birth Year: <span style={{fontWeight: 'normal'}}>{ personData.birth_year }</span></h3>
                    {
                        speciesData.name ?
                        <h3 className="mt-3">Species: <a href="#" onClick={ (e)  => handleLink(e, speciesData) } style={{fontWeight: 'normal'}}>{ speciesData.name }</a></h3> :
                        <h3 className="mt-3">Species: <span style={{fontWeight: 'normal'}}>Human</span></h3>
                    }
                    <h3 className="mt-3">Height: <span style={{fontWeight: 'normal'}}>{ personData.height }</span></h3>
                    <h3 className="mt-3">Mass: <span style={{fontWeight: 'normal'}}>{ personData.mass }</span></h3>
                    <h3 className="mt-3">Hair Color: <span style={{fontWeight: 'normal'}}>{ personData.hair_color }</span></h3>
                    <h3 className="mt-3">Skin Color: <span style={{fontWeight: 'normal'}}>{ personData.skin_color }</span></h3>
                    <h3 className="mt-3">Eye Color: <span style={{fontWeight: 'normal'}}>{ personData.eye_color }</span></h3>
                </div>
            }
        </div>
    );
}

export default FetchPeople;