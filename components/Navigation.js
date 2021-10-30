import React from 'react';
import Link from 'next/link';

const Navigation = ({status = "selected", loggedIn = "loggedOut"}) => {

  return (
    <div className="navigation" id="navigation">
      
      <Link href={"/Login"}>
        <div id="authButton" className={`navButton ${status}`}>
          <h6 className={`${loggedIn}`}>Sign in / sign up</h6>
          <h5>ready to create your own world?</h5>
        </div>
      </Link>


      <Link href={"/MyWorlds"}>
        <div id="viewWorldsButton" className={`navButton ${status}`}>
          <h6>My Worlds</h6>
          <h5>easily view and edit the worlds you have created</h5>
        </div>
      </Link>


      <Link href={"/CreateWorld"}>
        <div id="newWorldButton" className={`navButton ${status}`}>
          <h6>Create New</h6>
          <h5>start filling out information for your new world - everything from the flora & fauna of a region to local social customs</h5>
        </div>
      </Link>
    </div>
  );
}

export default Navigation;