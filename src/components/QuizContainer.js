import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addPointToTrait } from '../actions/personalityActions';
import { addCharacterToUser } from '../actions/authActions';
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
      let personalityType = ''
      this.props.addPointToTrait(this.state.traitChoice).then(() => {
        let personalityType = this.findPersonality()

        this.props.addCharacterToUser(this.props.auth.id, personalityType)
        this.props.history.push('/character');
      })
      // TODO:
      // (X) Compare all traits in pairs and pull the traits with the highest points
      //_____EX: extrovert > introvert ? extrovert : introvert
      // (X) Save all trait's Symbols into a string
      //_____EX: let personality = "EN"
      //         personality += "F"
      // (X) Find the personality that matches the user's personality variable
      //_____EX: Personality.find_by(title: personality)
      //         => {title: 'ENFP', characters: [...], traits: [...]}
      // (X) Select a randomized Character from the Personality matched
      //_____EX: let randomIndex = Math.Floor(Math.random() * personality.characters.length)
      //         personality.characters[randomIndex]
      //         => {english_name: "Naruto Uzumaki", ...}
      // (X) Save the Character object to STORE using "ADD_CHARACTER"
      // (X) Send a PATCH request to ".../users/:id" passing in the Character ID to the body
      //_____EX: {body: JSON.stringify( {user: {character_id: characterID} })}
      // (X) Possibly update State with new updated User

    }
  }


  handleChange = (e) => {
    this.setState({traitChoice: e.target.value.toLowerCase()})
  }

  // returns a Personality
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

const mapStateToProps = ({quiz, auth, personalityTracker}) => {
  return {quiz: quiz, auth: auth, traitPoints: personalityTracker}
}

export default connect(mapStateToProps, { addPointToTrait, addCharacterToUser })(QuizContainer);
