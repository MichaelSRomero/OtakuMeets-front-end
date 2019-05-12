import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Personality from './Personality'
import '../style/characterContainer.css'

class CharacterContainer extends React.Component {

  state = {
    currentIndex: 0
  }

  getPersonalityType = (index) => {
    // "ISFP" = ['I', 'S', 'F', 'P']
    const personalityType = this.props.character["personality_type"].split('')
    const traitSymbol = personalityType[index]
    const traitsObj = this.props.traits

    for (let key in traitsObj) {
      if (traitsObj[key].symbol === traitSymbol) {
        return traitsObj[key]
      }
    }

  }

  handleClick = (i) => {
    this.setState({currentIndex: i})
  }

  createPersonalityDiv = () => {
    const personalities = []

    for (let i = 0; i < 4; i++) {
      personalities.push(
        <Personality
          getPersonalityType={this.getPersonalityType}
          handleClick={this.handleClick}
          index={i}
          currentIndex={this.state.currentIndex}
        />
      )
    }

    return personalities;
  }

  render() {

    return (
      <React.Fragment>
      {
        this.props.token ? Object.keys(this.props.character).length > 0 &&
          <div className="character-container">

            <div className="character-info">
              <div className="character-you-are">
                <span>You are</span>
              </div>

              <div className="character-avatar">
                <div
                  className="avatar"
                  style={
                    {
                      backgroundImage: `url("${this.props.character["avatar_urls"]}")`
                    }}>
                </div>
              </div>

              <div className="character-name">
                <span>{this.props.character["english_name"]}</span>
              </div>

              <div className="character-personality-card">
                <div className="personality-header">
                  {this.createPersonalityDiv()}
                </div>

                <div
                  className="personality-trait">
                  {this.getPersonalityType(this.state.currentIndex).title.toUpperCase()}
                </div>
                <div className="trait-info">
                  <p>{this.getPersonalityType(this.state.currentIndex).description}</p>
                </div>
              </div>

              <Link to="/home">
                <div id="btn-next">NEXT</div>
              </Link>
            </div>

          </div>
        :
          this.props.history.push('/')
      }
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({auth, quiz}) => {
  return {character: auth.character, token: auth.token, traits: quiz}
}

export default connect(mapStateToProps)(CharacterContainer);
