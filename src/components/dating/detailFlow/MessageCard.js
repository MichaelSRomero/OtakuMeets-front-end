import React from 'react';

const MessageCard = (props) => {
  return (
    <div className="message-card">
      <div className="outer-user-avatar">
        <div className="user-avatar"></div>
      </div>

      <div className="message-info">
        <p className="info-username">
          Liikemike
        </p>
        <p className="info-last-message">
          What are you doing today?
        </p>
      </div>
    </div>
  )
}

export default MessageCard;
