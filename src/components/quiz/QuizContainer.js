import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addPointToTrait } from '../../actions/personalityActions';
import { addCharacterToUser } from '../../actions/authActions';
import '../../style/quizContainer.css'
import Answer from './Answer'

class QuizContainer extends React.Component {

  state = {
    traitIndex: 0,
    traitChoice: "",
    currentChecked: null,
    page: 1
  }

  createAnswers = () => {
    const traitsArray = []
    let currentStateIndex = this.state.traitIndex

    // Get 2 answers from 2 traits each, based off the index
    // EX: ["I am outgoing",
    //      "I love being around people",
    //      "I enjoy being alone",
    //      "I lose energy when i'm around people"
    //      ]
    for (let i = 0; i < 4; i++) {
      // Gets all keys from quiz into an Array
      // Object.keys(this.props.quiz) = ["Extraversion", "Introversion", ...]
      // EX: trait = this.props.quiz["Extraversion"]
      // CONT: trait = {id:, description:, answers:}

      let trait = this.props.quiz[Object.keys(this.props.quiz)[Math.floor(currentStateIndex / 2)]]

      traitsArray.push(
        <Answer
          key={i}
          trait={trait}
          currentChecked={this.state.currentChecked}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          index={i}/>
      )
      currentStateIndex++
    }

    return traitsArray;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let indexState = this.state.traitIndex

    if (indexState < 12) {
      this.props.addPointToTrait(this.state.traitChoice)

      this.setState((state) => ({
          traitIndex: indexState + 4,
          page: state.page + 1
        })
      )

    } else {
      // The last choice gets added to personalityReducer;
      // then PUSH to Character Page
      this.props.addPointToTrait(this.state.traitChoice)
        .then(() => {
          let personalityType = this.findPersonality()

          this.props.addCharacterToUser(this.props.auth, personalityType)
            .then(promise => this.props.history.push('/character'))
      });
    }
  }

  // upon click on DIV, fills the currently clicked radio button up
  // and sets state
  handleClick = (e, index) => {
    let value;

    if (e.target.className === "answer-box") {
      value = e.target.querySelector('input').value
    } else if (e.target.tagName === "P" || e.target.className === "answer-content") {
      value = e.target.parentElement.parentElement.querySelector('input').value
    } else if (e.target.className === "answer-checkbox") {
      value = e.target.querySelector('input').value
    } else {
      value = e.target.value
    }

    this.setState({
      traitChoice: value.toLowerCase(),
      currentChecked: index
    });
  }

  handleChange = (e) => {
    this.setState({traitChoice: e.target.value.toLowerCase()})
  }

  // returns a Personality Type
  // EX: "ESFP"
  findPersonality = () => {
    const traits = this.props.traitPoints
    const traitKeys = Object.keys(traits)
    let personalityType = ''

    traitKeys.forEach( (key, i) => {
      if (i % 2 === 0) {
        let currentTrait = traits[key]
        let nextTraitKey = traitKeys[i + 1]

        personalityType += this.getHighestTrait(currentTrait, traits[nextTraitKey])
      }
    })

    return personalityType;
  }

  // takes the highest score of a trait and returns its symbol
  getHighestTrait = (traitOne, traitTwo) => {
    return traitOne.score > traitTwo.score ? traitOne.symbol : traitTwo.symbol
  }

  render() {
    return (
      <React.Fragment>
        {this.props.auth.token ?
          <div className="quiz-container">
            <div className="quiz-top-background">
            </div>

            <div className="quiz-bottom-background">
            </div>

            <div className="quiz-overlap-answers">
              <div className="quiz-header-title">
                <div className="quiz-pages">
                  <span> {this.state.page} of 4</span>
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
                  value="Next">
                </input>

              </form>
            </div>

          </div>
          :
          <Redirect to="/" />
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({quiz, auth, personalityTracker}) => {
  return {quiz: quiz, auth: auth, traitPoints: personalityTracker}
}

export default connect(mapStateToProps, { addPointToTrait, addCharacterToUser })(QuizContainer);
