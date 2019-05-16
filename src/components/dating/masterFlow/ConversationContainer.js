import React from 'react';
import close from '../../../images/tinder-close.png'

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

            <img src={close} alt="small icon"/>
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
        </div>

      </div>
    )
  }
}

export default ConversationContainer;
