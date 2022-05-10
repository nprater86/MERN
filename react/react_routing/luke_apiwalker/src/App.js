import './App.css';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from './components/Form';
import FetchPlanet from './components/FetchPlanet';
import FetchPeople from './components/FetchPeople';
import FetchStarships from './components/FetchStarships';
import FetchVehicles from './components/FetchVehicles';
import FetchSpecies from './components/FetchSpecies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Form />
        <Switch>
          <Route path="/people/:id">
            <FetchPeople />
          </Route>
          <Route path="/planets/:id">
            <FetchPlanet />
          </Route>
          <Route path="/starships/:id">
            <FetchStarships />
          </Route>
          <Route path="/vehicles/:id">
            <FetchVehicles />
          </Route>
          <Route path="/species/:id">
            <FetchSpecies />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
