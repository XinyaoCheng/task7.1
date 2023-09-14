import React from 'react'
import "./styles.css";
import fbLogo from '../images/Facebook-logo.png';
import twiLogo from '../images/twitter-logo.png';
import insLogo from '../images/ins-logo.jpeg';

function Footer(){
    return(
        <div className="footer_container">
        <div className="row py-4">
            <div className="col-md-4">
              <h5>For Dev</h5>
              <ul className="list-unstyled">
                <li><a href="#">How it works</a></li>
                <li><a href="#">How to create a profile</a></li>
                <li><a href="#">Find jobs</a></li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5>For Clients</h5>
              <ul className="list-unstyled">
                <li><a href="#">How it works</a></li>
                <li><a href="#">How to post a job</a></li>
                <li><a href="#">Find dev</a></li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5>Stay Connected</h5>
              <div className="social_links">
                <a href="https://www.facebook.com"><img src={fbLogo} alt="facebook"/></a>
                <a href="https://twitter.com/"><img src={twiLogo} alt="twitter"/></a>
                <a href="https://www.instagram.com/"><img src={insLogo} alt="instagram"/></a>
              </div>
            </div>
          </div>
        <div className="devLinks">
          <h5>DEVLink</h5>
          <div className="other_links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Code of Coduct</a>
          </div>
        </div>
      </div>
    )
}

export default Footer;