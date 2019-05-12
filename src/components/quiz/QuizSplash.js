import React from 'react';
import { connect } from 'react-redux';
import { getTraits } from '../../actions/quizActions';
import { Redirect } from 'react-router-dom';
import quizLogo from '../../images/quiz-splash-icon.gif'
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
                <span>So we can find a character that describes you.</span>
              </div>

              <div className="quiz-img-icon">
                <img id="quiz-img-icon" src={quizLogo} alt="Logo GIF"/>
              </div>

              <div className="quiz-btn">
                <button onClick={() => this.props.history.push('/quiz')}>NEXT</button>
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
