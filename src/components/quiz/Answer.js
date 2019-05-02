import React from 'react';

const Answer = (props) => {
  return (
    <div className="answer-box">
      <div className="answer-content">
        {props.trait.answers[props.index].content}
        <span> {props.trait.title}</span>
      </div>
      <div className="answer-checkbox">
        <input
          type="radio"
          name="quiz"
          value={props.trait.title}
          onChange={props.handleChange}>
        </input>
      </div>
    </div>
  )
}

export default Answer;
