import React from 'react';

const Answer = (props) => {
  return (
    <div className="answer-box" onClick={(e) => props.handleClick(e, props.index) }>
    
      <div className="answer-content">
        <p>{props.trait.answers[props.index].content}</p>
      </div>

      <div className="answer-checkbox">
        <input
          checked={props.currentChecked === props.index ? true : false}
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
