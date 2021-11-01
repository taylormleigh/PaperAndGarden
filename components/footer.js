import React from 'react';

const Footer = () => {
  return (
    <div id="footer">
      <div id="buttonNavigation" className="row">

      <span className="col-xs">
        <a id="linktreeButton" className="footerButton" href="https://linktr.ee/paper.garden">
          <span className="buttonHoverText">Writing Resources</span>
        </a>
      </span>

      <span className="col-xs">
        <a id="githubButton" className="footerButton" href="https://github.com/taylormleigh/PaperAndGarden">
          <span className="buttonHoverText">Github Repo</span>
        </a>
      </span>

      <span className="col-xs">
        <a id="tayMadeButton" className="footerButton" href="https://tay-made.com">
          <span className="buttonHoverText">Portfolio</span>
        </a>
      </span>

      <span className="col-xs">
        <a id="linkedInButton" className="footerButton" href="https://www.linkedin.com/in/tay-huval/">
          <span className="buttonHoverText">Linked In</span>
        </a>
      </span>

      <span className="col-xs">
        <a id="contactButton" className="footerButton" href="mailto:me@tay-made.com">
          <span className="buttonHoverText">Contact Me</span>
        </a>
      </span>

      </div>
    </div>
  )
}

export default Footer;