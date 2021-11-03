import React from 'react';
import Layout from '../components/Layout.js';

const Account = () => {
  return (
    <Layout pathname={"signIn"}>
        <div className="greenContainer">
          <div className="greenContainerText row">
            <div id="changeSettings" className="col-xs">
              <div id="changeName" className="row">
                <div className="box">
                  change name
                </div>
              </div>
              <div id="emailSettings" className="row">
                <div className="box">
                  change email settings
                </div>
              </div>
              <div id="logOut" className="box">
                Log Out
              </div>
            </div>
            <div id="deleteAccount" className="col-xs">
              <div className="box">
                  Delete Account
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Account;