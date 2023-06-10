import React, { useState } from 'react'
import "./Signup.css"
import axios from "axios";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div id="signup" className='flex-col'>
      <h1>Signup</h1>
      <div className='signup-form'>
        <div className='subform'>
          <label htmlFor="name">Name: </label>
          <input onChange={(e) => {setName(e.target.value)}} type = "text" name='name' placeholder='Your Name' required />
        </div>

        <div className='subform'>
          <label htmlFor="email">Email: </label>
          <input onChange={(e) => {setEmail(e.target.value)}} type="text" name='email' placeholder='Your Email' required />
        </div>
        
        <div className='subform'>
          <label htmlFor="password">Password: </label>
          <input onChange={(e) => setPassword(e.target.value)} type="text" name='password' placeholder='Your Password' />
        </div>

        <div className='subbutton'>
        <button type="submit" id="submit" onClick={async (e) => {
          const response = await axios
          .post(`http://localhost:3001/signup/register`, {
            email: email,
            password: password,
            name: name
          })
          .catch(function (error) {
            console.log(error);
          });
          console.log(response);
        }}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Signup