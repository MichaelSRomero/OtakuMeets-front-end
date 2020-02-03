import React from 'react';
import PropTypes from 'prop-types';

const UserCard = (props) => {
  const {
    user,
  } = props;
  let randomIndex;
  // eslint-disable-next-line no-unused-expressions
  user.character === null ? randomIndex = 0 : randomIndex = Math.floor(Math.random() * user.character.avatar_urls.length);

  return (
    <div
      className="user-card"
      style={
      { backgroundImage: `url("${user.character.avatar_urls[randomIndex]}")` }
    }
    >
      <div className="card-info">

        <div className="info-header">
          <div className="username">
            <span>{user.username}</span>
          </div>

          <div className="user-age">
            <span>{user.age}</span>
          </div>
        </div>

        <div className="personality">
          <span>{user.character.personality}</span>
        </div>

      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    age: PropTypes.number,
    character: PropTypes.object,
  }),
};

export default UserCard;
