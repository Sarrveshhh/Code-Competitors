import React, { useState } from 'react'
import axios from 'axios';
import "./Login.css"

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = async(e) => {
    console.log(email);
    console.log(password);
    const response = await axios.post('http://localhost:3001/login', {
        email: email,
        password: password,
    })
    .catch(function (error) {
      console.log(error);
    });

    localStorage.setItem("token", response.data.token);

  };
  
  return (
    <div id="login" className='flex-col'>
      <h1>Login</h1>
      <div className='signup-form'>
        <div className='subform'>
          <label htmlFor="email">Email: </label>
          <input onChange={(e) => {setEmail(e.target.value)}} type="text" name='email' placeholder='Your Email' />
        </div>

        <div className='subform'>
          <label htmlFor="password">Password: </label>
          <input onChange={(e) => {setPassword(e.target.value)}}type="text" name='password' placeholder='Your Password' />
        </div>

        <div className='subform subbutton'>
        <button type="submit" id="submit" onClick={handleSubmit}>Log In</button>
        </div>
      </div>
    </div>
  )
}

export default Login ;