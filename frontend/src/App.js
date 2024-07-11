import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Electronics from './Components/Electronics';
import Toy from './Components/Toy';
import Shop from './Components/Shop';
import Main from './Main';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Cart from './Components/Cart';
import User from './Profile/User';
import Myprofile from './Profile/Myprofile';
import Order from './Order/Order';
import Wishlist from './Wishlist/Wishlist';
import Seller from './Seller/Seller';
import Notification from './Notification/Notification';

const App = () => {
   const[allUsers,setAllUsers]=useState([]); 
   const[searchValue,setSearchValue]=useState("User");
useEffect(()=>{ 
  function fetchdata(){
    axios.get('http://localhost:3001/users').then((res)=>setAllUsers(res.data)).catch((err)=>console.log(err));
  }
  fetchdata();
},[]);
   
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main setSearchValue={setSearchValue}/>} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/toy' element={<Toy />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/profiles' element={<User allUsers={allUsers}/>}/>
        <Route path="/user/myprofile" element={<Myprofile value={searchValue}/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/seller' element={<Seller/>}/>
        <Route path='/notification' element={<Notification/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App