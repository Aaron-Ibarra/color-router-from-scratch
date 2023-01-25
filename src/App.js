import logo from './logo.svg';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import RGB from './components/RGB/RGB.js';
import NotFound from './components/NotFound.js';
import './App.css';
import Main from './components/Main/Main.js';
import Footer from './components/layout/Footer/Footer.js';
import Header from './components/layout/Header/Header.js';

function App() {
  return (<>
    <Header />
    <Main />
    <Footer />
  </>
  );
}

export default App;
