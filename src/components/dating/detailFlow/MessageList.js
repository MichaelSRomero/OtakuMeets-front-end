import React from 'react';
import PropTypes from 'prop-types';
import MessageCard from './MessageCard';


const MessageList = (props) => {
  const {
    conversations,
    addCurrentMatchOnClick,
  } = props;
  const createMessageCards = () => {
    return conversations.map((user) => (
      <MessageCard
        key={`MessageCard ${user.id}`}
        userConvo={user}
        addCurrentMatchOnClick={addCurrentMatchOnClick}
      />
    ));
  };

  return (
    <div className="detail-list-messages">
      {createMessageCards()}
    </div>
  );
};

MessageList.propTypes = {
  conversations: PropTypes.arrayOf(PropTypes.object),
  addCurrentMatchOnClick: PropTypes.func,
};

export default MessageList;
