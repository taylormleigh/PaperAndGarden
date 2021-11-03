import React from "react"
import Header from "./Header.js"
import Footer from "./Footer.js"
import Navigation from "./Navigation.js"
import {motion, useMotionValue, useTransform} from 'framer-motion';

const Layout = ({children, pathname}) => {

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
          <Navigation pathname={pathname}/>
        </div>
      </div>
      <div className="col-xs">
        <div className="box">
          <div className="bodyDiv">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
              <main>{children}</main>
            </motion.div>
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
