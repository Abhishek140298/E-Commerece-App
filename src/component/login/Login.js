import React from 'react';
import './Login.css';

const Login = () => {
	const userName=(event)=>{
		console.log('userName',event.target.value)
	};
	const userPassword=(event)=>{
		console.log("userPassword",event.target.value)
	}
  return (
    <div className='main_div'>
      <div className='login_box'>
        <h4>Login</h4>
				<div className='credential_div'>
				<input className='login_input' placeholder="Email ID" type='text' onChange={userName}/>
				<input className='login_input' placeholder='Password' type ='password' onChange={userPassword}/>
				<span className='login_button'>Login</span>
				</div>
      </div>
    </div>
  );
};

export default Login;
