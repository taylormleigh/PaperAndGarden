import React from 'react';
import Link from 'next/link';

const Header = () => {

  return (
    <div id="header" className="row">
      <div className="col-xs">
        <div id="siteTitle" className="box">
          <Link href={"/"}>
            <div><h1>Paper & Garden</h1></div>
          </Link>
        </div>
      </div>
    </div>
    );
}

export default Header;