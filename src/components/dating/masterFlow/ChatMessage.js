import React from 'react';

class ChatMessage extends React.Component {

  render() {
    return (
      <div className="chat-message">
        <span class="timestamp">{this.props.message['created_at']}</span>
        <span class="message-content">{this.props.message.content}</span>
      </div>
    )
  }
}

export default ChatMessage;
