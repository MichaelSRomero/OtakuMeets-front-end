import React from 'react';
import { connect } from 'react-redux'
import { logOutUser } from '../actions/authActions'

const LogOut = (props) => {
  const handleClick = () => {
    props.logOutUser()
  }

  return (
    <div className="log-out-header">
      <div id="btn-log-out" onClick={handleClick}>Log Out</div>
    </div>
  )
}

export default connect(null, { logOutUser })(LogOut);
