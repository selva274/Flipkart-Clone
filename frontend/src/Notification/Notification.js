import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import './notification.css'
const Notification = () => {
  return (
    <>
    <Navbar/>
        <div className="notificatinContainer">
                <h1>No Notification</h1>
        </div>
      <Footer/>  
    </>
  )
}

export default Notification