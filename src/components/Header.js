import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOut from './LogOut';
import logo from '../images/luvdiscLogo-font.png';
import '../style/Header.css';

const Header = (props) => {
  const {
    token,
  } = props;
  return (
    <header id="header">
      <Link to="/">
        <div id="logo">
          <img id="site-logo" src={logo} alt="Logo" />
        </div>
      </Link>
      {/*************************************
        If User is logged in, display LOGOUT Button,
        else display LOGIN Button
      **************************************/}
      { token
        ? <LogOut />
        : (
          <div className="header-log-in">
            <span>Have an account?</span>
            <Link to="/login">
              <div id="btn-log-in">Sign In</div>
            </Link>
          </div>
        )}
    </header>
  );
};

const mapStateToProps = ({ auth }) => {
  return { token: auth.token };
};

Header.propTypes = {
  token: PropTypes.string,
};

export default connect(mapStateToProps)(Header);
