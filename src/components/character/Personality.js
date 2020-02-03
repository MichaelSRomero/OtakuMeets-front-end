import React from 'react';
import PropTypes from 'prop-types';

const style = { borderBottom: 'rgb(234, 122, 157) solid 2px' };

const Personality = (props) => {
  const {
    index,
    currentIndex,
    handleClick,
    getPersonalityType,
  } = props;

  return (
    <div
      className="personality-symbol"
      onClick={() => handleClick(index)}
      style={currentIndex === index ? style : null}
    >
      {getPersonalityType(index).symbol}
    </div>
  );
};

Personality.propTypes = {
  handleClick: PropTypes.func,
  getPersonalityType: PropTypes.func,
  index: PropTypes.number,
  currentIndex: PropTypes.number,
};

export default Personality;
