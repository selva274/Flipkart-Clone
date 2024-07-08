import React from 'react';
import "./toy.css";
import Navbar from './Navbar';
import Footer from './Footer';
const Electronics = () => {
  return (
    <>
    <Navbar/>
     <div className="containerE containerT">
     <h3>Toys</h3>
  <div className="products">            
    <div class="card" style={{width:"10rem"}}>
  <img src="toys/toy (1).webp" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Teddy</h5>   
  </div>
</div>
 <div class="card" style={{width:"10rem"}}>
  <img src="toys/toy (2).webp" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Elephant</h5>   
  </div>
</div>
 <div class="card" style={{width:"10rem"}}>
  <img src="toys/toy (3).webp" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Spider-Man</h5>   
  </div>
</div>
 <div class="card" style={{width:"10rem"}}>
  <img src="toys/toy (4).webp" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Doreamoan</h5>   
  </div>
</div>
 <div class="card" style={{width:"10rem"}}>
  <img src="toys/toy (5).webp" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Lamborghini</h5>   
  </div>
</div>
 <div class="card" style={{width:"10rem"}}>
  <img src="toys/toy (6).webp" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">JCB</h5>   
  </div>
</div>
          </div>
     </div>
     <Footer/>
     </>
  )
}

export default Electronics