import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
            <Route exact path="/products/">
              <Main />
            </Route>
            <Route exact path="/products/:id">
              <Detail />
            </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
