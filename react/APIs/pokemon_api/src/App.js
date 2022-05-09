import './App.css';
import { useState } from 'react';
import RetrievePokemon from './components/RetrievePokemon';
import RenderPokemon from './components/RenderPokemon';

function App() {
  const [pokeNames, setPokeNames] = useState([]);

  const getPokeNames = (pokemon) => {
    setPokeNames(pokemon);
  }

  return (
    <div className="App">
      <RetrievePokemon onFetchRequest={ getPokeNames } />
      <RenderPokemon pokeNames={ pokeNames } />
    </div>
  );
}

export default App;