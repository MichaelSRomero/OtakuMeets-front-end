import React from 'react';

const GameIconLarge = (props) => {
  return(
    <div className="game-icon-outer-large">
      <div className="game-icon-large">
        <img src={props.img}/>
      </div>
    </div>
  )
}

export default GameIconLarge;
