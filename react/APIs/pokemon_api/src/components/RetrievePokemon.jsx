import React, { useState } from 'react';

const FetchPokemon = props => {
    const [pokeNames, setPokeNames] = useState([]);

    async function requestPokemon() {
        setPokeNames([]);

        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=807`)
            .then(response => response.json())
            .then(response => {
                props.onFetchRequest(response.results);
            })
        }

    return (
        <div>
            <button className="btn btn-success" onClick={ requestPokemon }>Fetch Pokemon</button>
        </div>
    );
}

export default FetchPokemon;