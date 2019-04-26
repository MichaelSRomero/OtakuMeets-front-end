import React from 'react';

class SignUp extends React.Component {
  state = {
    email: "",
    username: "",
    password: "",
    gender: "",
    preference: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div id="sign-up">
        <form onSubmit={(e) => this.props.handleSignUp(e, this.state)}>
          {/***************EMAIL***************/}
          <input
            type="text"
            name="email"
            placeholder="your.email@example.com"
            value={this.state.email}
            onChange={this.handleChange}>
          </input>
          {/**************USERNAME**************/}
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}>
          </input>
          {/**************PASSWORD**************/}
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}>
          </input>

          <br></br>

          <label> Which gender best describes you?
            <br></br>
            {/**************GENDER**************/}
            <select name="gender" onChange={this.handleChange} defaultValue="placeholder">
              <option value="placeholder" disabled hidden>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <br></br>

          <label> Who are you looking to meet?
            <br></br>
            {/************PREFERENCE************/}
            <select name="preference" onChange={this.handleChange} defaultValue="placeholder">
              <option value="placeholder" disabled hidden>Seeking</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Both">Both</option>
            </select>
          </label>

          <br></br>
          {/***************SUBMIT***************/}
          <input type="submit" name="submit"></input>
        </form>
      </div>
    )
  }
}

export default SignUp;
