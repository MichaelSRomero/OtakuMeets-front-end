import React from 'react';
import PropTypes from 'prop-types';

const MessageCard = (props) => {
  const {
    userConvo,
    addCurrentMatchOnClick,
  } = props;
  const { user } = userConvo;
  const { messages } = userConvo;
  const randomIndex = Math.floor(Math.random() * user.character.avatar_urls.length);

  return (
    <div
      className="message-card"
      onClick={() => addCurrentMatchOnClick({ ...user, avatarIndex: randomIndex })}
    >
      <div className="outer-user-avatar">
        <div
          className="user-avatar"
          style={{ backgroundImage: `url("${user.character.avatar_urls[randomIndex]}")` }}
        />
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
  );
};

MessageCard.propTypes = {
  userConvo: PropTypes.shape({
    user: PropTypes.object,
    messages: PropTypes.arrayOf(PropTypes.shape({
      content: PropTypes.string,
    })),
  }),
  addCurrentMatchOnClick: PropTypes.func,
};


export default MessageCard;
