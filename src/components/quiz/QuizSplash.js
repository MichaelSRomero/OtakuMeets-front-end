import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getTraits } from '../../actions/quizActions';
import quizLogo from '../../images/quiz-splash-icon.gif';
import '../../style/quizSplash.css';

class QuizSplash extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getTraits();
  }

  render() {
    const {
      token,
      history,
    } = this.props;
    return (
      <>
        {/*************************************
          If User is logged in, render this page
          Else redirect to HOME page
        **************************************/}
        {token
          ? (
            <div className="quiz-splash-container">
              <div className="quiz-top-background" />

              <div className="quiz-bottom-background" />

              <div className="quiz-overlap-container">
                <div className="quiz-content-card">
                  <h3>Tell us about yourself</h3>
                  <span>So we can find a character that describes you.</span>
                </div>

                <div className="quiz-img-icon">
                  <img id="quiz-img-icon" src={quizLogo} alt="Logo GIF" />
                </div>

                <div className="quiz-btn">
                  <button
                    onClick={() => history.push('/quiz')}
                    type="button"
                  >
                    NEXT
                  </button>
                </div>
              </div>

            </div>
          )
          : <Redirect to="/" />}
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    token: auth.token,
    username: auth.username,
  };
};

QuizSplash.propTypes = {
  token: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  getTraits: PropTypes.func,
};

export default connect(mapStateToProps, { getTraits })(QuizSplash);
