import React from 'react';
import Layout from '../components/Layout.js'
// import Auth from '../components/Auth';

const SignIn = () => {
  return (
    <Layout>
      <div id="signInLogo" className="logo"></div>
        <div className="signInDiv">
          Sign In with Google
        </div>
    </Layout>
  )
}

export default SignIn;