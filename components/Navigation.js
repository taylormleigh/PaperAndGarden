import React from 'react';
import Link from 'next/link';
import {motion, useMotionValue, useTransform} from 'framer-motion';




const Navigation = ({status = "loggedOut", pathname = "home"}) => {

  return (
    <div id="navigation">
      
      <Link href={"/SignIn"}>
        <motion.div
          // whileHover={{ opacity: 0.5 }}
          id="authButton" className={`navButton ${pathname}`}>
          <div id="authButton" className="insideNavButton">
            <h6 className={`${status} navButtonHeader`}>Sign in / sign up</h6>
            <h5 className="navButtonText">ready to create your own world?</h5>
          </div>
        </motion.div>
      </Link>


      <Link href={"/MyWorlds"}>
        <motion.div
          // whileHover={{ opacity: 0.5 }}
          id="viewWorldsButton" className={`navButton ${pathname}`}>
          <div id="authButton" className="insideNavButton">
            <h6 className="navButtonHeader">My Worlds</h6>
            <h5 className="navButtonText">easily view and edit the worlds you have created</h5>
          </div>
        </motion.div>
      </Link>


      <Link href={"/Create"}>
        <motion.div
          // whileHover={{ scale: 0.95 }}
          id="newWorldButton" className={`navButton ${pathname}`}>
          <div id="authButton" className="insideNavButton">
            <h6 className="navButtonHeader">Create New</h6>
            <h5 className="navButtonText">start filling out information for your new world - everything from the flora & fauna of a region to local social customs</h5>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}

export default Navigation;