import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOut from './LogOut'
import '../style/Header.css'

const Header = (props) => {

  return (
    <header id="header">
      <Link to="/">
        <div id="logo">
          WEBSITE LOGO
        </div>
      </Link>
      {/*************************************
        If User is logged in, display LOGOUT Button,
        else display LOGIN Button
      **************************************/}
      { props.token ?
        <LogOut />
        :
        <div className="header-log-in">
          <span>Have an account?</span>
          <Link to="/login">
            <div id="log-in">Sign In</div>
          </Link>
        </div>
      }
    </header>
  )
}

const mapStateToProps = ({ auth }) => {
  return {token: auth.token}
}

export default connect(mapStateToProps)(Header);
