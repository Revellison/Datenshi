import React from 'react';
import './Header.css';
import logo from '/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Datenshi" />
      </div>
      <h1 className="header__title">Датенши</h1>
    </header>
  );
}

export default Header;