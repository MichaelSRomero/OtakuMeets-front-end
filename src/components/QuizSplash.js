import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class QuizSplash extends React.Component {
  componentDidMount() {
    // fetch traits
  }

  render() {
    return (
      <React.Fragment>
        {/*************************************
          If User is logged in, render this page
          Else redirect to HOME page
        **************************************/}
        {this.props.token ?
          <div>
            <span>QUIZ SPLASH!</span>
            <span>Welcome {this.props.username}</span>
            <button onClick={() => this.props.history.push('/quiz')}>Next</button>
          </div>
          :
          <Redirect to="/" />
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    token: auth.token,
    username: auth.username
  }
}

export default connect(mapStateToProps)(QuizSplash);
