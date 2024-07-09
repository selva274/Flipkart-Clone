import React from 'react'
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/toy' element={<Toy />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/User' element={<User/>}/>
        <Route path="/user/myprofile" element={<Myprofile/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/seller' element={<Seller/>}/>
        <Route path='/notification' element={<Notification/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App