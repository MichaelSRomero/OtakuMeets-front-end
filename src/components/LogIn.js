import React from 'react';

class LogIn extends React.Component {
  state ={
    email: "",
    password: ""
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
        <form onSubmit={(e) => this.props.handleLogIn(e, this.state)}>
          <input type="text" name="email" placeholder="Email" onChange={this.handleChange}/>
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default LogIn;
