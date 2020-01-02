import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logIn } from '../actions/authActions';
import '../style/login.css';
import loginGIF from '../images/login.gif';

class LogIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleLogIn = (e) => {
    e.preventDefault();
    const { history } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    this.props.logIn(this.state, history.push);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="LogIn">
        <div className="outer-form">

          <div className="login-header-title">
            <span>Sign In</span>
          </div>

          <div className="login-img">
            <img id="login-img" src={loginGIF} alt="Logo GIF" />
          </div>

          <form className="login-form" onSubmit={this.handleLogIn}>
            {/***************EMAIL***************/}
            <label>
              <span>Email</span>
              <input
                className="login-inputs"
                type="text"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </label>
            {/*************PASSWORD**************/}
            <label>
              <span>Password</span>
              <input
                className="login-inputs"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </label>
            <div className="login-forgot">
              <span>Forgot password?</span>
            </div>
            {/**************SUBMIT**************/}
            <input
              className="login-submit"
              type="submit"
              value="SIGN IN"
            />
          </form>

          <div className="facebook-login">
            <span>SIGN IN WITH FACEBOOK</span>
          </div>

        </div>
      </div>
    );
  }
}

LogIn.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  logIn: PropTypes.func,
};

export default connect(null, { logIn })(LogIn);
