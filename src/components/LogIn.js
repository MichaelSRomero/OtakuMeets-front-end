import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions/authActions'

class LogIn extends React.Component {
  state = {
    email: "",
    password: ""
  }

  handleLogIn = (e) => {
    e.preventDefault();
    this.props.logIn(this.state, this.props.history.push)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="LogIn">
        SIGN IN
        <form onSubmit={this.handleLogIn}>
          <input type="text" name="email" placeholder="Email" onChange={this.handleChange}/>
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { logIn })(LogIn);
