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
        <Link to="/electronics"><div class="card" style={{width:"10rem"}}>
  <img src="/electronics/ele (6).webp" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Electronics</h5>   
  </div>
</div></Link>
        </li>
        <li>
        <Link to="/toy"><div class="card" style={{width:"10rem"}}>
  <img src="toys/toy (6).webp" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Toys</h5>   
  </div>
</div></Link>
        </li>
        <li>
        <Link to="/shop"> <div class="card" style={{ width: "10rem" }}>
            <img src="/shop/monsoon/mon (1).webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Shop Essential</h5>
            </div>
          </div></Link>
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