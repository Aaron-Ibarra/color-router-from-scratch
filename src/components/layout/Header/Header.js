import React from 'react';
import logo from './flame-logo.svg';
import './Header.css';

export default function Header() {
  const whateverText = '{ Color Router }';
  return (
    <header>
      <div className="background"></div>
      <img src={logo} alt="logo" />
      <h1>{whateverText}</h1>
    </header>
  );
}
