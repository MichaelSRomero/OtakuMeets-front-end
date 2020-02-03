import React from 'react';
import PropTypes from 'prop-types';

const GameIconLarge = (props) => {
  const {
    img,
    handleClick,
  } = props;
  return (
    <div className="game-icon-outer-large">
      <div
        className="game-icon-large"
        onClick={handleClick}
      >
        <img src={img} alt="large-icon" />
      </div>
    </div>
  );
};

GameIconLarge.propTypes = {
  img: PropTypes.string,
  handleClick: PropTypes.func,
};

export default GameIconLarge;
