import React from 'react';
import {Link} from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div id="container">
        HOME PAGE
        <Link to="/signup">
          <div id="signup-btn">SignUp Button</div>
        </Link>
      </div>
    )
  }
}

export default Home;
