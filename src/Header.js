import React from 'react';
import logo from './logo.svg';
import './styles/Header.css';

function Header() {
  return (
      <div className="Header">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" /> 
            <span className="App-title">ConjugApp</span>
        </header>
      </div>
  );
}

export default Header;
