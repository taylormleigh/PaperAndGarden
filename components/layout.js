import React from "react"
import Header from "./header"
import Footer from "./footer"


const Layout = ({children}) => {
  return (
    <>
      <Header />
        <div className="container">
          <main>{children}</main>
        </div>
      <Footer />
    </>
  )
}

export default Layout
