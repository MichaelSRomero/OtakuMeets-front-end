import React from 'react';

class MessageCard extends React.Component {
  render() {
    const { userConvo } = this.props
    const user = userConvo.user
    const messages = userConvo.messages
    let randomIndex = Math.floor(Math.random() * user.character["avatar_urls"].length)

    return (
      <div
        className="message-card"
        onClick={() => this.props.addCurrentMatchOnClick({...user, avatarIndex: randomIndex})}>
        <div className="outer-user-avatar">
          <div
            className="user-avatar"
            style={{backgroundImage: `url("${user.character['avatar_urls'][randomIndex]}")`}}></div>
        </div>

        <div className="message-info">
          <p className="info-username">
            {user.username}
          </p>
          <p className="info-last-message">
            {messages[messages.length - 1].content}
          </p>
        </div>
      </div>
    )
  }
}

export default MessageCard;
