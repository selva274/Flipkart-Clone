import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import './wishlist.css'
const Wishlist = () => {
  return (
    <>
    <Navbar/>
    <div className="containerWishlist">
       <div className="items">
        <h2>Nothing in Wishlist</h2>
       </div>
    </div>
    <Footer/>
    </>
  )
}

export default Wishlist