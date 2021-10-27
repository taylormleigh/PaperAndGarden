import React from 'react';
import Link from 'next/link';

export default function Header({worldList, newWorld, goHome}) {

  return (
    <div className="container" id="header">
          <div id="logo"></div>


          <Link href={"/"}><button className="headerButton" onClick={goHome}>HOME</button></Link>


          <Link href={"/MyWorlds"}><button className="headerButton" onClick={worldList}>MY WORLDS</button></Link>


          <Link href={"/CreateWorld"}><button className="headerButton" onClick={newWorld}>CREATE</button></Link>
        </div>
    );
}