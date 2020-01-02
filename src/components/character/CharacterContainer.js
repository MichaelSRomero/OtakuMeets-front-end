import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Personality from './Personality';
import '../../style/characterContainer.css';

class CharacterContainer extends Component {
  state = {
    currentIndex: 0,
  }

  getPersonalityType = (index) => {
    const {
      character,
      traits,
    } = this.props;
    // "ISFP" = ['I', 'S', 'F', 'P']
    const personalityType = character.personality.split('');
    const traitSymbol = personalityType[index];
    const traitName = Object.keys(traits).find((traitKey) => (traits[traitKey].symbol === traitSymbol));
    return traits[traitName];
  }

  handleClick = (i) => {
    this.setState({ currentIndex: i });
  }

  createPersonalityDiv = () => {
    const { currentIndex } = this.state;
    const personalities = [];

    for (let i = 0; i < 4; i += 1) {
      personalities.push(
        <Personality
          getPersonalityType={this.getPersonalityType}
          handleClick={this.handleClick}
          index={i}
          currentIndex={currentIndex}
        />,
      );
    }

    return personalities;
  }

  render() {
    const {
      token,
      character,
      history,
    } = this.props;
    const { currentIndex } = this.state;

    return (
      <>
        {
        token ? Object.keys(character).length > 0
          && (
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
                      backgroundImage: `url("${character.avatar_urls}")`,
                    }
                  }
                />
              </div>

              <div className="character-name">
                <span>{character.english_name}</span>
              </div>

              <div className="character-personality-card">
                <div className="personality-header">
                  {this.createPersonalityDiv()}
                </div>

                <div
                  className="personality-trait"
                >
                  {this.getPersonalityType(currentIndex).title.toUpperCase()}
                </div>
                <div className="trait-info">
                  <p>{this.getPersonalityType(currentIndex).description}</p>
                </div>
              </div>

              <Link to="/home">
                <div id="btn-next">NEXT</div>
              </Link>
            </div>

          </div>
          )
          : history.push('/')
      }
      </>
    );
  }
}

const mapStateToProps = ({ auth, quiz }) => {
  return { character: auth.character, token: auth.token, traits: quiz };
};

CharacterContainer.propTypes = {
  character: PropTypes.shape({
    english_name: PropTypes.string,
    japanese_name: PropTypes.string,
    gender: PropTypes.string,
    alias: PropTypes.string,
    show: PropTypes.string,
    personality: PropTypes.string,
    avatar_urls: PropTypes.array,
  }),
  traits: PropTypes.shape({
    extraversion: PropTypes.object,
    introversion: PropTypes.object,
    sensing: PropTypes.object,
    intuition: PropTypes.object,
    thinking: PropTypes.object,
    feeling: PropTypes.object,
    judging: PropTypes.object,
    perceiving: PropTypes.object,
  }),
  token: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default connect(mapStateToProps)(CharacterContainer);
