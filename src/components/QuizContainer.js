import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addPointToTrait } from '../actions/personalityActions';
import Answer from './Answer'

class QuizContainer extends React.Component {

  state = {
    traitIndex: 0,
    traitChoice: ""
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
      this.setState({traitIndex: indexState + 4})
    } else {
      // The last choice gets added to personalityReducer;
      // then PUSH to Character Page
      this.props.addPointToTrait(this.state.traitChoice)
      this.props.history.push('/character');
    }
  }

  handleChange = (e) => {
    this.setState({traitChoice: e.target.value.toLowerCase()})
  }

  render() {
    return (
      <React.Fragment>
        {this.props.token ?
          <div className="quiz-container">
            <form onSubmit={this.handleSubmit}>
              {this.createAnswers()}
              <input type="submit" value="Next"></input>
            </form>
          </div>
          :
          <Redirect to="/" />
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({quiz, auth}) => {
  return {quiz: quiz, token: auth.token}
}

export default connect(mapStateToProps, { addPointToTrait })(QuizContainer);
