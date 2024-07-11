import React from 'react'
import Footer from '../Components/Footer';
import './login.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
    <Navbar/>
    <div className="logincontainer">
    <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type='email' name='email' placeholder='Enter the Email'/><br/>
        <label>Password:</label>
        <input type='password' name='password' placeholder='Enter the Password'/>
        <button type='submit'>Submit</button>       
      </form>
      <p>New User ?</p><Link to="/signup">SignUp</Link>       </div>
      <Footer/>
    </>
  )
}

export default Login