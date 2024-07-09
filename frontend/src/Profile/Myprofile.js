import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import "./myprofile.css"
const Myprofile = ({value}) => {
   
   
  return (
        <>
        <Navbar/>       
        <div className="profilecontainer">
        <div className="nav">
        <i class="bi bi-person-fill"></i>
        <h1>Hello {value}</h1>
        </div>
          </div>
        <Footer/>
        </>

  )
}

export default Myprofile