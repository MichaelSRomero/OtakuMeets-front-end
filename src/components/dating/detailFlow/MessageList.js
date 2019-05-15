import React from 'react';
import MessageCard from './MessageCard';


class MessageList extends React.Component {
  createMessageCards = () => {
    // return this.props.matches.map(user => <MessageCard key={user.id} user={user} />)
    let arr = []

    for (var i = 0; i < 8; i++) {
      arr.push(
        <div className="message-card">
          <div className="outer-user-avatar">
            <div className="user-avatar"></div>
          </div>

          <div className="message-info">
            <p className="info-username">
              SpicyMuffin
            </p>
            <p className="info-last-message">
              I love to eat muffins, do you?
            </p>
          </div>
        </div>
      )
    }

    return arr;
  }

  render() {
    return (
      <div className="detail-list-messages">
        {this.createMessageCards()}

      </div>
    )
  }
}

export default MessageList;
