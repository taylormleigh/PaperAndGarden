import React from 'react';
import Link from 'next/link';

const Header = ({worldList, newWorld, goHome}) => {

  return (
    <div className="header" id="header">
      <Link href={"/"}><h1>Paper & Garden</h1></Link>
    </div>
    );
}

export default Header;