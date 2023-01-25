import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from '../NotFound.js';
import RGB from '../RGB/RGB.js';
import './Main.css';
export default function Main() {
  return (
    <>
      <main>
        <div className="colors">
          <Link to="/rgb/255/0/0">
            <button style={{ backgroundColor: 'red' }}>Red</button>
          </Link>
          <Link to="/rgb/0/255/0">
            <button style={{ backgroundColor: 'green' }}>Green</button>
          </Link>
          <Link to="/rgb/0/0/255">
            <button style={{ backgroundColor: 'blue' }}>Blue</button>
          </Link>
        </div>

        <Switch>
          <Route exact path="/">
            <Redirect to="/rgb/255/0/0" />
          </Route>
          <Route exact path="/rgb/:r/:g/:b" component={RGB} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </main>
    </>
  );
}
