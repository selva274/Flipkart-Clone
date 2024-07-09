import React from 'react'
import { Link} from 'react-router-dom'
import './user.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const User = ({allUsers}) => {
   
  return (
    <>
    <Navbar/>
    <div className="usersList">
      <h3>Flipkart Users</h3>
    </div>
    {
      allUsers.map(user=> <div key={user.id} className="usercontainer">
       <div className="userprofile">        
   <i class="bi bi-person-fill"></i>
   <Link to='/user/myprofile'>{user.username}</Link>  
       </div>
   </div>)
    }
  
      <Footer/>
      </>
  )
}

export default User