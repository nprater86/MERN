import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/products/:id">
              <Detail />
            </Route>
            <Route exact path="/products/:id/edit">
              <Update />
            </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
