import React from 'react';
import close from '../../../images/tinder-close.png'
import genderIcon from '../../../images/gender-icon.png'
import personalityIcon from '../../../images/personality-icon.png'
import aliasIcon from '../../../images/alias-icon.png'
import showIcon from '../../../images/show-icon.png'
import enIcon from '../../../images/en-icon.png'
import jpIcon from '../../../images/jp-icon.png'

class ConversationContainer extends React.Component {

  render() {
    return (
      <div className="conversation-container">
        {/***********************************
          ___________CONVERSATION____________
          **********************************/}
        <div className="conversation">

          <div className="chat-nav-bar">
            <div className="chat-nav-avatar">
            </div>

            <p>You matched with KaleMuffin</p>

            <img
              onClick={this.props.exitProfileOnClick}
              src={close}
              alt="close button"/>
          </div>

          <div className="chat-box">
          </div>

          <div className="message-bar">
            <div className="unmatch">
              <span>UNMATCH</span>
            </div>

            <input
              type="text"
              placeHolder="Type a message">
            </input>

            <div className="submit-message">
              <span>SEND</span>
            </div>
          </div>
        </div>
        {/***********************************
          ______________PROFILE______________
          **********************************/}
        <div className="profile">
          <div className="profile-avatar"></div>

          <div className="profile-header-tab">
            <div className="profile-header">
              <span>GloriaRain</span>
              <span>26</span>
            </div>

            <div className="profile-sub-header">
              <div className="sub-row">
                <img
                  src={personalityIcon}
                  alt="Personality Icon"
                />
                <span>ESTP</span>
              </div>

              <div className="sub-row">
                <img
                  src={genderIcon}
                  alt="Gender Icon"
                  />
                <span>Male</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default ConversationContainer;
