import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addPointToTrait } from '../../actions/personalityActions';
import { addCharacterToUser } from '../../actions/authActions';
import '../../style/quizContainer.css';
import Answer from './Answer';

class QuizContainer extends React.Component {
  state = {
    traitIndex: 0,
    traitChoice: '',
    currentChecked: null,
    page: 1,
  }

  createAnswers = () => {
    const {
      quiz,
    } = this.props;
    const { currentChecked } = this.state;
    const traitsArray = [];
    // eslint-disable-next-line react/destructuring-assignment
    let currentStateIndex = this.state.traitIndex;

    // Get 2 answers from 2 traits each, based off the index
    // EX: ["I am outgoing",
    //      "I love being around people",
    //      "I enjoy being alone",
    //      "I lose energy when i'm around people"
    //      ]
    for (let i = 0; i < 4; i += 1) {
      // Gets all keys from quiz into an Array
      // Object.keys(this.props.quiz) = ["Extraversion", "Introversion", ...]
      // EX: trait = this.props.quiz["Extraversion"]
      // CONT: trait = {id:, description:, answers:}

      const trait = quiz[Object.keys(quiz)[Math.floor(currentStateIndex / 2)]];

      traitsArray.push(
        <Answer
          key={i}
          trait={trait}
          currentChecked={currentChecked}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          index={i}
        />,
      );
      currentStateIndex += 1;
    }

    return traitsArray;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      traitChoice,
    } = this.state;
    const {
      auth,
      history,
    } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    const indexState = this.state.traitIndex;

    if (indexState < 12) {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.addPointToTrait(traitChoice);

      this.setState((state) => ({
        traitIndex: indexState + 4,
        page: state.page + 1,
      }));
    } else {
      // The last choice gets added to personalityReducer;
      // then PUSH to Character Page
      // eslint-disable-next-line react/destructuring-assignment
      this.props.addPointToTrait(traitChoice)
        .then(() => {
          const personalityType = this.findPersonality();

          // eslint-disable-next-line react/destructuring-assignment
          this.props.addCharacterToUser(auth, personalityType)
            .then(() => history.push('/character'));
        });
    }
  }

  // upon click on DIV, fills the currently clicked radio button up
  // and sets state
  handleClick = (e, index) => {
    let value;

    if (e.target.className === 'answer-box') {
      value = e.target.querySelector('input').value;
    } else if (e.target.tagName === 'P' || e.target.className === 'answer-content') {
      value = e.target.parentElement.parentElement.querySelector('input').value;
    } else if (e.target.className === 'answer-checkbox') {
      value = e.target.querySelector('input').value;
    } else {
      value = e.target.value;
    }

    this.setState({
      traitChoice: value.toLowerCase(),
      currentChecked: index,
    });
  }

  handleChange = (e) => {
    this.setState({ traitChoice: e.target.value.toLowerCase() });
  }

  // returns a Personality Type
  // EX: "ESFP"
  findPersonality = () => {
    // eslint-disable-next-line react/destructuring-assignment
    const traits = this.props.traitPoints;
    const traitKeys = Object.keys(traits);
    let personalityType = '';

    traitKeys.forEach((key, i) => {
      if (i % 2 === 0) {
        const currentTrait = traits[key];
        const nextTraitKey = traitKeys[i + 1];

        personalityType += this.getHighestTrait(currentTrait, traits[nextTraitKey]);
      }
    });

    return personalityType;
  }

  // takes the highest score of a trait and returns its symbol
  getHighestTrait = (traitOne, traitTwo) => {
    return traitOne.score > traitTwo.score ? traitOne.symbol : traitTwo.symbol;
  }

  render() {
    const { page } = this.state;
    const {
      auth,
    } = this.props;
    return (
      <>
        {auth.token
          ? (
            <div className="quiz-container">
              <div className="quiz-top-background" />

              <div className="quiz-bottom-background" />

              <div className="quiz-overlap-answers">
                <div className="quiz-header-title">
                  <div className="quiz-pages">
                    <span>
                      {' '}
                      {page}
                      {' '}
of 4
                    </span>
                  </div>

                  <div className="quiz-title">
                    <span>About you</span>
                  </div>

                  <div className="quiz-header">
                    <span>What describes you best?</span>
                  </div>

                </div>

                <form onSubmit={this.handleSubmit}>
                  <div className="answer-container">
                    {this.createAnswers()}
                  </div>

                  <input
                    className="quiz-next-btn"
                    type="submit"
                    value="Next"
                  />

                </form>
              </div>

            </div>
          )
          : <Redirect to="/" />}
      </>
    );
  }
}

const mapStateToProps = ({ quiz, auth, personalityTracker }) => {
  return { quiz, auth, traitPoints: personalityTracker };
};

QuizContainer.propTypes = {
  quiz: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  auth: PropTypes.shape({
    token: PropTypes.string,
  }),
  traitPoints: PropTypes.arrayOf(PropTypes.object),
  addPointToTrait: PropTypes.func,
  addCharacterToUser: PropTypes.func,
};


export default connect(mapStateToProps, { addPointToTrait, addCharacterToUser })(QuizContainer);
