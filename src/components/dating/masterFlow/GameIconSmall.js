import React from 'react';
import PropTypes from 'prop-types';

const GameIconSmall = (props) => {
  const {
    img,
    handleClick,
  } = props;
  return (
    <div className="game-icon-outer-small">
      <div
        className="game-icon-small"
        onClick={handleClick}
      >
        <img src={img} alt="small icon" />
      </div>
    </div>
  );
};

GameIconSmall.propTypes = {
  img: PropTypes.string,
  handleClick: PropTypes.func,
};

export default GameIconSmall;
