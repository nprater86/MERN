import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from './components/Form';
import FetchData from './components/FetchData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Form />
        <Switch>
          <Route path="/:selection/:id">
            <FetchData />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;