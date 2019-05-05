import React from 'react';
import { connect } from 'react-redux';
import { getTraits } from '../../actions/quizActions';
import { Redirect } from 'react-router-dom';
import '../../style/quizSplash.css'

class QuizSplash extends React.Component {
  componentDidMount() {
    this.props.getTraits()
  }

  render() {
    return (
      <React.Fragment>
        {/*************************************
          If User is logged in, render this page
          Else redirect to HOME page
        **************************************/}
        {localStorage ?
          <div className="quiz-splash-container">
            <div className="quiz-top-background">
            </div>

            <div className="quiz-bottom-background">
            </div>

            <div className="quiz-overlap-container">
              <div className="quiz-content-card">
                <h3>Tell us about yourself</h3>
                <span></span>
              </div>

              <div className="quiz-img-icon">
              </div>

              <div className="quiz-btn">
                <button onClick={() => this.props.history.push('/quiz')}>Next</button>
              </div>
            </div>

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

export default connect(mapStateToProps, { getTraits })(QuizSplash);
