import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet, Link } from "react-router-dom";
import Add from './Components/Add';
import './main.css'
import Footer from './Components/Footer';
const Main = () => {
  return(
    <>
    <Navbar/>
    <Add/>
    <div className="navigation">
    <nav>
      <ul>
        <li>
        <Link to="/electronics">Electronics</Link>
        </li>
        <li>
        <Link to="/toy">Toys</Link>
        </li>
        <li>
        <Link to="/shop">Shop</Link>
        </li>
      </ul>
      </nav>
      <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Main