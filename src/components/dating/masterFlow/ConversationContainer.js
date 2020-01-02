/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChatMessage from './ChatMessage';
import { createConversation, createMessage } from '../../../actions/authActions';
import { addCurrentConversation } from '../../../actions/usersActions';
import close from '../../../images/tinder-close.png';
import genderIcon from '../../../images/gender-icon.png';
import personalityIcon from '../../../images/personality-icon.png';
import aliasIcon from '../../../images/alias-icon.png';
import showIcon from '../../../images/show-icon.png';
import enIcon from '../../../images/en-icon.png';
import jpIcon from '../../../images/jp-icon.png';

class ConversationContainer extends Component {
  state = {
    textContent: '',
  }

  createChatMessages = () => {
    // eslint-disable-next-line react/destructuring-assignment
    const currentConvo = this.props.conversation;
    const {
      id,
      user,
    } = this.props;

    if (Object.keys(currentConvo).length > 0) {
      return currentConvo.messages.map((message) => (
        <ChatMessage
          key={`ChatMessage ${message.id}`}
          message={message}
          userID={id}
          matchUser={user}
        />
      ));
    }
  }

  handleTextChange = (e) => {
    this.setState({ textContent: e.target.value });
  }

  sendMessageOnClick = () => {
    const { textContent } = this.state;
    // eslint-disable-next-line react/destructuring-assignment
    const currentConvo = this.props.conversation;
    const {
      id,
      user,
      addCurrentConversation,
      createConversation,
      createMessage,
    } = this.props;

    if (textContent.length > 0 && Object.keys(currentConvo).length > 0) {
      createMessage(id, currentConvo, textContent)
        .then((promise) => {
          addCurrentConversation(promise);
        });

      this.setState({ textContent: '' });
    } else if (textContent.length > 0 && Object.keys(currentConvo).length < 1) {
      createConversation(id, user, textContent)
        .then((promise) => {
          addCurrentConversation(promise);
        });

      this.setState({ textContent: '' });
    }
  }

  render() {
    const { textContent } = this.state;
    const {
      user,
      exitProfileOnClick,
    } = this.props;

    return (
      <div className="conversation-container">
        {/***********************************
          ___________CONVERSATION____________
          **********************************/}
        <div className="conversation">

          <div className="chat-nav-bar">
            <div
              className="chat-nav-avatar"
              style={{ backgroundImage: `url("${user.character.avatar_urls[user.avatarIndex]}")` }}
            />

            <p>
You matched with
              {user.username}
            </p>

            <img
              onClick={exitProfileOnClick}
              src={close}
              alt="close button"
            />
          </div>

          <div className="chat-box">
            {this.createChatMessages()}
          </div>

          <div className="message-bar">
            <div className="unmatch">
              <span>UNMATCH</span>
            </div>

            <input
              type="text"
              placeholder="Type a message"
              value={textContent}
              onChange={this.handleTextChange}
            />

            <div
              className="submit-message"
              onClick={this.sendMessageOnClick}
            >
              <span>SEND</span>
            </div>
          </div>
        </div>
        {/***********************************
          ______________PROFILE______________
          **********************************/}
        <div className="profile">
          <div
            className="profile-avatar"
            style={{ backgroundImage: `url("${user.character.avatar_urls[user.avatarIndex]}")` }}
          />

          <div className="profile-header-tab">
            <div className="profile-header">
              <span>{user.username}</span>
              <span>{user.age}</span>
            </div>

            <div className="profile-sub-header">
              <div className="sub-row">
                <img
                  src={personalityIcon}
                  alt="Personality Icon"
                />
                <span>{user.character.personality}</span>
              </div>

              <div className="sub-row">
                <img
                  src={genderIcon}
                  alt="Gender Icon"
                />
                <span>{user.gender}</span>
              </div>

            </div>
          </div>

          <div className="profile-character-tab">
            <p id="character-header">Character Info</p>
            <div className="character-row">
              <img
                src={enIcon}
                alt="English Name Icon"
              />
              <span>{user.character.english_name}</span>
            </div>

            <div className="character-row">
              <img
                src={jpIcon}
                alt="Japanese Name Icon"
              />
              <span>{user.character.japanese_name}</span>
            </div>

            <div className="character-row">
              <img
                id="alias-icon"
                src={aliasIcon}
                alt="Alias Icon"
              />
              <span>{user.character.alias}</span>
            </div>

            <div className="character-row">
              <img
                id="show-icon"
                src={showIcon}
                alt="Show Icon"
              />
              <span>{user.character.show}</span>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { id: auth.id };
};

ConversationContainer.propTypes = {
  id: PropTypes.number,
  user: PropTypes.shape({
    username: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string,
    character: PropTypes.object,
    avatarIndex: PropTypes.number,
  }),
  conversation: PropTypes.shape({
    messages: PropTypes.arrayOf(PropTypes.object),
  }),
  addCurrentConversation: PropTypes.func,
  createMessage: PropTypes.func,
  createConversation: PropTypes.func,
  exitProfileOnClick: PropTypes.func,
};

export default connect(mapStateToProps, { createConversation, createMessage, addCurrentConversation })(ConversationContainer);
