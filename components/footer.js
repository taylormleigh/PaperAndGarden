import React from 'react';

const Footer = () => {
  return (
    <div id="footer">
      <div id="buttonNavigation">

        <a id="linktreeButton" href="https://linktr.ee/paper.garden">
          <span className="buttonHoverText">Writing Resources</span>
        </a>

        <a id="githubButton" href="https://github.com/taylormleigh/PaperAndGarden">
          <span className="buttonHoverText">Github Repo</span>
        </a>

        <a id="tayMadeButton" href="https://tay-made.com">
          <span className="buttonHoverText">Portfolio</span>
        </a>

        <a id="linkedInButton" href="https://www.linkedin.com/in/tay-huval/">
          <span className="buttonHoverText">Linked In</span>
        </a>

        <a id="contactButton" href="mailto:me@tay-made.com">
          <span className="buttonHoverText">Contact</span>
        </a>

      </div>
    </div>
  )
}

export default Footer;