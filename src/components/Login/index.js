import React, { Component } from 'react';
import HeadPanel from '../Unauthenticated/HeadPanel';
import LoginFooter from './LoginFooter';
import Amplify from "../../auth/amplify";

class Login extends Component {
  componentDidMount() {
    let prompt = false
    if (sessionStorage.getItem('prompt')) {
      prompt = true
      sessionStorage.removeItem('prompt')
    }
    const url = Amplify.getPocLink('login', {prompt})
    if (url) {
      window.location.href = url
    }
  }

  render() {
    return (
      <div className="p-container_panel">
        <HeadPanel />
        <LoginFooter/>
      </div>
    )
  }
}

export default Login;