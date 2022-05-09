import './App.css';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from './components/Form';
import FetchPlanet from './components/FetchPlanet';
import FetchPeople from './components/FetchPeople';

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
