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
              On Otaku Meets, you choose your potential matches based on their personality type. No more headaches for catching beautiful people with ugly
              personalities. Put that fish right back in the ocean and get you another one! Because you deserve better, your future spouse deserves you. So what fun is dating if you can't date with a surprise?
            </span>
          </div>

          <Link to="/signup" className="signup-link">
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
