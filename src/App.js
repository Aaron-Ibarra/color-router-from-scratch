import logo from './logo.svg';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import RGB from './components/RGB/RGB.js';
import NotFound from './components/NotFound.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/rgb/255/0/0">Red</Link>
            </li>
            <li>
              <Link to="/rgb/0/255/0">Green</Link>
            </li>
            <li>
              <Link to="/rgb/0/0/255">Blue</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route exact path="/">
          <Redirect to="/rgb/255/0/0" />
        </Route>
        <Route exact path="/rgb/:r/:g/:b" component={RGB} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
