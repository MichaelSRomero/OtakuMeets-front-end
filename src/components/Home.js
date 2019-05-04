import React from 'react';
import {Link} from 'react-router-dom'
import homeLogo from '../images/couple-home-page.png'
import smallLogo from '../images/otaku-meets-small-logo.png'

class Home extends React.Component {
  render() {
    return (
      <div id="container">
      {/**********************************
      ___________LEFT CONTAINER___________
      **********************************/}
        <div className="home-left-container">
          <div className="header-text">
            <h1>DATING WITH SURPRISE</h1>
          </div>
          <div className="paragraph-text">
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </span>
          </div>
          <Link to="/signup">
            <div id="signup-btn">
              <span>JOIN</span>
              <img id="signup-logo" src={smallLogo} alt="SignUp Logo"/>
            </div>
          </Link>
          <div className="terms-service">
            <span>
              By clicking Join, you agree to our <a href="/" target="_blank">Terms of Service</a>. Learn about how we process and use your data in our <a href="/" target="_blank">Privacy Policy</a> and how we use cookies and similar technology in our <a href="/" target="_blank">Cookie Policy</a>.
            </span>
          </div>
          <div className="powered-by">
            <span>POWERED BY: </span>
          </div>
        </div>
        {/**********************************
        __________RIGHT CONTAINER___________
        **********************************/}
        <div className="home-img-container">
          <img id="home-logo" src={homeLogo} alt="Couple"/>
        </div>
      </div>
    )
  }
}

export default Home;
