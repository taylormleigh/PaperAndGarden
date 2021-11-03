import React from 'react';
import {motion, useMotionValue, useTransform} from 'framer-motion';

const Footer = () => {
  return (
    <div id="footer">
      <div id="buttonNavigation">

      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="col-xs footerButtonContainer">
        <a id="linktreeButton" className="footerButton" href="https://linktr.ee/paper.garden">
          <span className="buttonHoverText">Writing Resources</span>
        </a>
      </motion.div>

      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="col-xs footerButtonContainer">
        <a id="githubButton" className="footerButton" href="https://github.com/taylormleigh/PaperAndGarden">
          <span className="buttonHoverText">Github Repo</span>
        </a>
      </motion.div>

      <motion.div 
        whileHover={{ scale: 1.05 }} 
        className="col-xs footerButtonContainer">
        <a id="tayMadeButton" className="footerButton" href="https://tay-made.com">
          <span className="buttonHoverText">Portfolio</span>
        </a>
      </motion.div>

      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="col-xs footerButtonContainer">
        <a id="linkedInButton" className="footerButton" href="https://www.linkedin.com/in/tay-huval/">
          <span className="buttonHoverText">Linked In</span>
        </a>
      </motion.div>

      <motion.div 
        whileHover={{ scale: 1.05 }} 
        className="col-xs footerButtonContainer">
        <a id="contactButton" className="footerButton" href="mailto:me@tay-made.com">
          <span className="buttonHoverText">Contact Me</span>
        </a>
      </motion.div>

      </div>
    </div>
  )
}

export default Footer;
