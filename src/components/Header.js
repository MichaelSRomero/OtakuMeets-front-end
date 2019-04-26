import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header id="header">
      <Link to="/">
        <div id="logo">WEBSITE LOGO</div>
      </Link>
      <Link to="/login">
        <div id="log-in">Sign In</div>
      </Link>
    </header>
  )
}

export default Header;
