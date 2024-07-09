import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import './order.css';
const Order = () => {
  return (
   <>
    <Navbar/>
    <div className="containerOrder">
         <div className="orders">
            <h2>No Pending Orders</h2>
         </div>
    </div>
    <Footer/>
   </>
  )
}

export default Order