import React from 'react';
import Link from 'next/link';

const Header = () => {

  return (
    <div id="header">
      <Link href={"/"}>
      <div id="siteTitle"><h1>Paper & Garden</h1></div>
      </Link>
    </div>
    );
}

export default Header;