import React from 'react';

const RenderPokemon = props => {
    return (
        <div>
            <h1 className="mt-3">Pokemon:</h1>
            <ol>
                {
                    props.pokeNames.map( (pokemon,i) => <li className="mt-2" key={i}>{ pokemon.name }</li> )
                }
            </ol>
        </div>
    );
}

export default RenderPokemon;