import React from 'react';
import './style/App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header'
import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import QuizSplash from './components/QuizSplash'
import QuizContainer from './components/QuizContainer'
import CharacterContainer from './components/CharacterContainer'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login" render={ (routerProps) => <LogIn {...routerProps}/> } />
          <Route path="/signup" render={ (routerProps) => <SignUp {...routerProps}/> } />
          <Route path="/quiz-splash" render={ (routerProps) => <QuizSplash {...routerProps}/> } />
          <Route path="/quiz" render={ (routerProps) => <QuizContainer {...routerProps}/> } />
          <Route path="/character" render={ () => <CharacterContainer/> } />
          <Route path="/" render={ () => <Home /> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(App));
