import React from "react"
import Header from "./Header.js"
import Footer from "./Footer.js"
import Navigation from "./Navigation.js"

const Layout = ({children}) => {

  return (
    <div className="container">

    <div className="row">
      <div className="col-xs">
        <div className="box"><Header /></div>
      </div>
    </div>

    <div className="row">
      <div className="col-xs">
        <div className="box">
          <Navigation />
        </div>
      </div>
      <div className="col-xs">
        <div className="box">
          <div className="bodyDiv">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-xs">
        <div className="box"><Footer /></div>
      </div>
    </div>

    </div>
  )
}

export default Layout;