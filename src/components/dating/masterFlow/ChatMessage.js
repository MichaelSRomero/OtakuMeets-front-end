import React from 'react';

const currentUserMessageStyle = {
  textAlign: 'right',
  paddingLeft: '100px'
}

// RENDER THIS STYLE FOR THE LOGGED-IN USER'S MESSAGE
// MESSAGE IS POSITIONED TO THE RIGHT IN BLUE
const currentUserWrapStyle = {
  backgroundColor: 'rgb(86, 163, 248)',
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '6px',
  borderBottomLeftRadius: '16px',
  color: 'white'
}
// RENDER THIS STYLE FOR THE NON-LOGGED-IN USER'S MESSAGE
// MESSAGE IS POSITIONED TO THE LEFT IN GREY ALONG WITH AN AVATAR
const matchUserWrapStyle = {
  backgroundColor: 'rgb(241, 241, 241)',
  borderTopLeftRadius: '6px',
  borderTopRightRadius: '16px',
  borderBottomRightRadius: '16px',
  color: 'rgb(23, 23, 23)'
}

class ChatMessage extends React.Component {

  render() {
    const {userID, message, matchUser} = this.props

    return (
      <div
        className="chat-message"
        style={userID === message.user_id ? currentUserMessageStyle : null}>

        <div className="inner-chat-message">
          {
            userID !== message.user_id ?
              <div className="match-user-outer-avatar">
                <div
                  className="match-user-avatar"
                  style={{backgroundImage: `url("${matchUser.character['avatar_urls'][matchUser.avatarIndex]}")`}}>
                </div>
              </div>
            :
              null
          }
          <div
            className="message-wrap"
            style={userID === message.user_id ? currentUserWrapStyle : matchUserWrapStyle}>
            <span className="message-content">{message.content}</span>
          </div>
        </div>

      </div>
    )
  }
}

export default ChatMessage;
