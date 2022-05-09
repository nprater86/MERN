import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Instructions from './components/Instructions';
import Home from './components/Home';
import Input from './components/Input';
import WordBgColor from './components/WordBgColor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Instructions />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/:input">
            <Input />
          </Route>
          <Route path="/:word/:color1/:color2">
            <WordBgColor />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
