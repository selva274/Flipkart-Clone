import React from 'react'
import { Link} from 'react-router-dom'
import './user.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const User = () => {
   
  return (
    <>
    <Navbar/>
    <div className="usersList">
      <h3>Flipkart Users</h3>
    </div>
   <div className="usercontainer">
       <div className="userprofile">
        
   <i class="bi bi-person-fill"></i>
   <Link to='/user/myprofile'>Profile</Link>  
       </div>
   </div>
      <Footer/>
      </>
  )
}

export default User