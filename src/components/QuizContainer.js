import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Answer from './Answer'

class QuizContainer extends React.Component {

  state = {
    traitIndex: 0,
    choice: ""
  }

  createAnswers = () => {
    const traitsArray = []
    let currentStateIndex = this.state.traitIndex

    for (let i = 0; i < 4; i++) {
      let trait = this.props.quiz[Object.keys(this.props.quiz)[Math.floor(currentStateIndex / 2)]]

      traitsArray.push(<Answer key={i} trait={trait} handleChange={this.handleChange} index={i}/>)
      currentStateIndex++
    }

    return traitsArray;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let indexState = this.state.traitIndex

    if (indexState < 12) {
      this.setState({traitIndex: indexState + 4})
    }
  }

  handleChange = (e) => {
    this.setState({choice: e.target.value.toLowerCase()})
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

export default connect(mapStateToProps)(QuizContainer);
