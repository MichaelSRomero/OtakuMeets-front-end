import React from 'react';
import PropTypes from 'prop-types';

const RadioPreference = (props) => {
  const {
    preferenceValue,
    handleChange,
  } = props;
  return (
    <div className="radio-container">

      <div className="preference-name">
        <span>{preferenceValue.title}</span>
      </div>

      <div className="preference-radio">
        <input
          type="radio"
          name="preference"
          value={preferenceValue.gender}
          onChange={handleChange}
        />
      </div>

    </div>
  );
};

RadioPreference.propTypes = {
  preferenceValue: PropTypes.shape({
    title: PropTypes.string,
    gender: PropTypes.string,
  }),
  handleChange: PropTypes.func,
};

export default RadioPreference;
