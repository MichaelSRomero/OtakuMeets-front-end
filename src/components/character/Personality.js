import React from 'react'

const style = {borderBottom: "rgb(234, 122, 157) solid 2px"}

const Personality = (props) => {
  return (
    <div
      className="personality-symbol"
      onClick={() => props.handleClick(props.index)}
      style={props.currentIndex === props.index ? style : null}>
      {props.getPersonalityType(props.index).symbol}
    </div>
  )
}

export default Personality;
