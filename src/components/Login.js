import React from 'react';
import '../styles/Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';

function Login() {

    const signIn = async () => {
        try {
          const result = await auth.signInWithPopup(provider);
          console.log(result.user); // Log user information upon successful sign-in
        } catch (error) {
          console.error(error.message);
        }
      };
      
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="" />
                <h1>Sign in to Wise Programmer Hub</h1>
                <p>wise.programmer.slack.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div> 
        </div>
    )
}

export default Login