import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RadioGender from './RadioGender';
import RadioPreference from './RadioPreference';
import { signUp } from '../../actions/authActions';
import '../../style/signup.css';

const genders = [
  { title: 'Man', gender: 'Male' },
  { title: 'Woman', gender: 'Female' },
  { title: 'Other', gender: 'Other' },
];

const preferences = [
  { title: 'Men', gender: 'Male' },
  { title: 'Women', gender: 'Female' },
  { title: 'Both', gender: 'Both' },
];

class SignUp extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    gender: '',
    preference: '',
  }

  handleSignUp = (e) => {
    e.preventDefault();
    const { history } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    this.props.signUp(this.state, history.push);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  createRadioGenders = () => {
    return genders.map((genderObj) => <RadioGender handleChange={this.handleChange} genderValue={genderObj} />);
  }

  createRadioPreferences = () => {
    return preferences.map((preferenceObj) => <RadioPreference handleChange={this.handleChange} preferenceValue={preferenceObj} />);
  }

  render() {
    const {
      email,
      username,
      password,
    } = this.state;
    return (
      <div id="sign-up">
        <div className="outer-form">

          <div className="signup-header-title">
            <div className="signup-title">
              <span>About you</span>
            </div>

            <div className="signup-header">
              <span>Welcome! Who are you?</span>
            </div>
          </div>

          <form className="signup-form" onSubmit={this.handleSignUp}>
            {/***************EMAIL***************/}
            <input
              className="signup-inputs"
              type="text"
              name="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={this.handleChange}
            />

            <div className="form-column">
              {/**************USERNAME**************/}
              <input
                className="signup-inputs left-input"
                type="text"
                name="username"
                placeholder="username"
                value={username}
                onChange={this.handleChange}
              />

              {/**************PASSWORD**************/}
              <input
                className="signup-inputs right-input"
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>

            <label>
              <div className="signup-label">
                <span>Which gender best describes you?</span>
              </div>
              {/**************GENDER**************/}
              <div className="gender-container">
                {this.createRadioGenders()}
              </div>
            </label>

            <label>
              <div className="signup-label">
                <span>Who are you looking to meet?</span>
              </div>
              {/************PREFERENCE************/}
              <div className="preference-container">
                {this.createRadioPreferences()}
              </div>
            </label>

            {/***************SUBMIT***************/}
            <input
              className="signup-submit"
              type="submit"
              name="submit"
              value="NEXT"
            />

          </form>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  signUp: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default connect(null, { signUp })(SignUp);
