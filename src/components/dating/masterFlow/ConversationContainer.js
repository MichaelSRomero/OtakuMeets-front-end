import React from 'react';
import ChatMessage from './ChatMessage';
import { connect } from 'react-redux';
import { createConversation } from '../../../actions/authActions';
import close from '../../../images/tinder-close.png'
import genderIcon from '../../../images/gender-icon.png'
import personalityIcon from '../../../images/personality-icon.png'
import aliasIcon from '../../../images/alias-icon.png'
import showIcon from '../../../images/show-icon.png'
import enIcon from '../../../images/en-icon.png'
import jpIcon from '../../../images/jp-icon.png'

class ConversationContainer extends React.Component {

  state = {
    textContent: ''
  }

  createChatMessages = () => {
    let currentConvo = this.props.conversation

    if (Object.keys(currentConvo).length > 0) {
      return currentConvo.messages.map(message => <ChatMessage
        key={message.id}
        message={message}
        userID={this.props.id}
        matchUser={this.props.user}/>)
    }
  }

  handleTextChange = (e) => {
    this.setState({textContent: e.target.value})
  }

  sendMessageOnClick = () => {
    const textContent = this.state.textContent
    let currentConvo = this.props.conversation

    if (textContent.length > 0 && Object.keys(currentConvo).length > 0) {
      console.log(textContent)
      this.setState({textContent: ''})
    } else if (textContent.length > 0 && Object.keys(currentConvo).length < 1) {
      this.props.createConversation(this.props.id, this.props.user, textContent)
      this.setState({textContent: ''})
    }
  }

  render() {
    const { user } = this.props

    return (
      <div className="conversation-container">
        {/***********************************
          ___________CONVERSATION____________
          **********************************/}
        <div className="conversation">

          <div className="chat-nav-bar">
            <div
              className="chat-nav-avatar"
              style={{backgroundImage: `url("${user.character['avatar_urls'][user.avatarIndex]}")`}}>
            </div>

            <p>You matched with {user.username}</p>

            <img
              onClick={this.props.exitProfileOnClick}
              src={close}
              alt="close button"/>
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
              value={this.state.textContent}
              onChange={this.handleTextChange}>
            </input>

            <div
              className="submit-message"
              onClick={this.sendMessageOnClick}>
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
            style={{backgroundImage: `url("${user.character['avatar_urls'][user.avatarIndex]}")`}}>
          </div>

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
              <span>{user.character['english_name']}</span>
            </div>

            <div className="character-row">
              <img
                src={jpIcon}
                alt="Japanese Name Icon"
              />
              <span>{user.character['japanese_name']}</span>
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
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {id: auth.id}
}

export default connect(mapStateToProps, { createConversation })(ConversationContainer);
