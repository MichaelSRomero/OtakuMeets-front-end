import React from 'react';
import { connect } from 'react-redux'
import { logOutUser } from '../actions/authActions'

const LogOut = (props) => {
  const handleClick = () => {
    props.logOutUser()
  }

  return (
    <div id="log-out">
      <button onClick={handleClick}>Log Out</button>
    </div>
  )
}

export default connect(null, { logOutUser })(LogOut);
