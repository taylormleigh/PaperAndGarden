import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Navigation from "./Navigation"

// const Layout = ({children}) => {
//   return (
//     <>
//       <div className="row container">

//         <div className="row">
//           <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
//             <div className="box">
//               <Header />
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
//             <div className="box">
//               <Navigation />
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
//             <div className="box">
//               <div className="bodyDiv">
//                 <main>{children}</main>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
//             <div className="box">
//               <Footer />
//             </div>
//           </div>
//         </div>


//       </div>
//     </>
//   )
// }

const Layout = ({children}) => {

  return (
    <>

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

    </>
  )
}

export default Layout;