import React from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './components/Header'
import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import { signUp } from './actions/authActions'

class App extends React.Component {

  handleSignUp = (e, newUser) => {
    e.preventDefault();
    console.log(`New User: ${newUser.username} has Signed Up`)
    this.props.signUp(newUser)
  }

  handleLogIn = (e, existingUser) => {
    e.preventDefault();
    console.log(`Welcome back, ${existingUser.email}`)
  }

  render() {
    console.log("HISTORY PROPS: ", this.props)
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login" render={() => <LogIn handleLogIn={this.handleLogIn}/> } />
          <Route path="/signup" render={() => <SignUp handleSignUp={this.handleSignUp}/> } />
          <Route path="/" render={() => <Home /> } />
        </Switch>
      </div>
    );
  }
}

export default connect(null, {signUp})(withRouter(App));
