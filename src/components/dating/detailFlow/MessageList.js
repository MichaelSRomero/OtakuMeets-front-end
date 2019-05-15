import React from 'react';
import MessageCard from './MessageCard';


class MessageList extends React.Component {
  createMessageCards = () => {
    return this.props.matches.map(user => <MessageCard key={user.id} user={user} />)
  }

  render() {
    return (
      <div className="detail-list-messages">
        {/*this.createMessageCards()*/}

        <div className="message-card">
          <div className="outer-user-avatar">
            <div className="user-avatar"></div>
          </div>

          <div className="message-info">
            <p className="info-username">
              Liikemike
            </p>
            <p className="info-last-message">
              What are you doing today? I guess nothing right?
            </p>
          </div>
        </div>

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

      </div>
    )
  }
}

export default MessageList;
