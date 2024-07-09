import React from 'react'
import Navbar from './Navbar'
import "./cart.css"
import Footer from './Footer';
const Cart = () => {
  return (
   <>
   <Navbar/>
    <div className="cartcontainer">
      <h1>Empty Cart</h1>
    </div>
    <Footer/>
   </>
  )
}

export default Cart