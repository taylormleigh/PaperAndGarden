import React from 'react';
import Link from 'next/link';

const Navigation = ({worldList, newWorld, goHome}) => {

  return (
    <div className="navigation" id="navigation">
      <Link href={"/Login"}><button id="authButton" className="navButton" onClick={goHome}>HOME</button></Link>


      <Link href={"/MyWorlds"}><button id="viewWorldsButton" className="navButton" onClick={worldList}>MY WORLDS</button></Link>


      <Link href={"/CreateWorld"}><button id="newWorldButton" className="navButton" onClick={newWorld}>CREATE</button></Link>
    </div>
  );
}

export default Navigation;