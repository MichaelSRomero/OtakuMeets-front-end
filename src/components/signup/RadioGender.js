import React from 'react';
import PropTypes from 'prop-types';

const RadioGender = (props) => {
  const {
    genderValue,
    handleChange,
  } = props;
  return (
    <div className="radio-container">

      <div className="gender-name">
        <span>{genderValue.title}</span>
      </div>

      <div className="gender-radio">
        <input
          type="radio"
          name="gender"
          value={genderValue.gender}
          onChange={handleChange}
        />
      </div>

    </div>
  );
};

RadioGender.propTypes = {
  genderValue: PropTypes.shape({
    title: PropTypes.string,
    gender: PropTypes.string,
  }),
  handleChange: PropTypes.func,
};

export default RadioGender;
