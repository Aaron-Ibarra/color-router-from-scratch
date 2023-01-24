import logo from './logo.svg';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import RGB from './components/RGB/RGB.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/RGB/255/0/0">Red</Link>
            </li>
            <li>
              <Link to="/RGB/0/255/0">Green</Link>
            </li>
            <li>
              <Link to="/RGB/0/0/255">Blue</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/"></Route>
      </Switch>
      <Switch>
        <Route path="/RGB/:r/:g/:b"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
