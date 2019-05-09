import React from 'react';

const GameIconLarge = (props) => {
  return(
    <div className="game-icon-outer-large">
      <div
        className="game-icon-large"
        onClick={props.handleClick}>
        <img src={props.img} alt="large-icon"/>
      </div>
    </div>
  )
}

export default GameIconLarge;
