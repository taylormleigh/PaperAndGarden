import React from 'react';
import Layout from '../components/Layout.js'
// import Auth from '../components/Auth';

const SignIn = () => {
  return (
    <Layout pathname={"signIn"}>
      <img id="signInLogo" className="logo" src="builderlogo.png"/>
        <div className="greenContainer">
          <div className="greenContainerText">Sign In with Google</div>
        </div>
    </Layout>
  )
}

export default SignIn;