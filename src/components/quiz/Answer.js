import React from 'react';
import PropTypes from 'prop-types';

const Answer = (props) => {
  const {
    currentChecked,
    handleChange,
    handleClick,
    trait,
    index,
  } = props;
  return (
    <div className="answer-box" onClick={(e) => handleClick(e, index)}>

      <div className="answer-content">
        <p>{trait.answers[index].content}</p>
      </div>

      <div className="answer-checkbox">
        <input
          checked={currentChecked === index}
          type="radio"
          name="quiz"
          value={trait.title}
          onChange={handleChange}
        />
      </div>

    </div>
  );
};

Answer.propTypes = {
  currentChecked: PropTypes.number,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  trait: PropTypes.shape({
    title: PropTypes.string,
    answers: PropTypes.array,
  }),
  index: PropTypes.number,
};

export default Answer;
