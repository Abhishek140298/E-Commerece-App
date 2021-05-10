import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='main_div'>
      <div className='login_box'>
        <h4>Login</h4>
				<div className='credential_div'>
				<input className='login_input' placeholder="Email ID" type='text'/>
				<input className='login_input' placeholder='Password' type ='password'/>
				<span className='login_button'>Login</span>
				</div>
      </div>
    </div>
  );
};

export default Login;
