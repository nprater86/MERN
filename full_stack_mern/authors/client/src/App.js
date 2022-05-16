import './App.css';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Main from './views/Main';
import AddAuthor from './views/AddAuthor'
import UpdateAuthor from './views/UpdateAuthor';
import ErrorPage from './views/ErrorPage';

function App() {
  return (
    <div className="App container">
        <h1>Favorite Authors</h1>
        <BrowserRouter>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/new">
            <AddAuthor />
          </Route>
          <Route exact path="/edit/:id">
            <UpdateAuthor />
          </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
