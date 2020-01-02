import React from 'react';
import PropTypes from 'prop-types';

const MatchCard = (props) => {
  const {
    user,
    addCurrentMatchOnClick,
  } = props;
  const randomIndex = Math.floor(Math.random() * user.character.avatar_urls.length);

  return (
    <div
      className="match-card"
      style={
        { backgroundImage: `url("${user.character.avatar_urls[randomIndex]}")` }
      }
      onClick={() => addCurrentMatchOnClick({ ...user, avatarIndex: randomIndex })}
    >
      <div className="match-info">
        <span>{user.username}</span>
      </div>
    </div>
  );
};

MatchCard.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    character: PropTypes.object,
  }),
  addCurrentMatchOnClick: PropTypes.func,
};


export default MatchCard;
