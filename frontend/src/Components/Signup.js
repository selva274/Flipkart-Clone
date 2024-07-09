import React from 'react'
import Footer from '../Components/Footer';
import './login.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
    <Navbar/>
    <div className="logincontainer">
    <h2>Signup</h2>
      <form>
        <label>Email:</label>
        <input type='email' name='email' placeholder='Enter the Email'/><br/>
        <label>Password:</label>
        <input type='password' name='password' placeholder='Enter the Password'/>
        <button type='submit'>Submit</button>
       
      </form>
      <p>Already have Account ?</p><Link to="/login">Login</Link>       
      </div>
      <Footer/>
    </>
  )
}

export default Signup