import React from 'react';
import MessageCard from './MessageCard';


class MessageList extends React.Component {
  createMessageCards = () => {
    return this.props.conversations.map(user => <MessageCard
      key={user.id}
      userConvo={user}
      addCurrentMatchOnClick={this.props.addCurrentMatchOnClick}/>)
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
