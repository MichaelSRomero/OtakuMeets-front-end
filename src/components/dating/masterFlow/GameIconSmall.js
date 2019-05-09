import React from 'react';

const GameIconSmall = (props) => {
  return(
    <div className="game-icon-outer-small">
      <div
        className="game-icon-small"
        onClick={props.handleClick}>
        <img src={props.img} alt="small icon"/>
      </div>
    </div>
  )
}

export default GameIconSmall;
