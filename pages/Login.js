import React from 'react';
import Layout from '../components/layout'

export default function Login({logIn}) {
  return (
    <Layout>
        <div className="login">
        <h1>LOG IN</h1>
        <br />
        <input placeholder="username"></input>
        <br />
        <input type="password" placeholder="password"></input>
        <br />
        <button onClick={logIn}>SUBMIT</button>
        </div>
    </Layout>
  )
}