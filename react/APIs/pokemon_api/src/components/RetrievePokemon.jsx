import React from 'react';
import axios from 'axios';


const FetchPokemon = props => {
    function requestPokemon() {

    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=807`)
        .then(response => {
            props.onFetchRequest(response.data.results);
        })
    }

    return (
        <div>
            <button className="btn btn-success" onClick={ requestPokemon }>Fetch Pokemon</button>
        </div>
    );
}

export default FetchPokemon;