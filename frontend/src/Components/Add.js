import React from 'react'
import "./add.css"
const Add = () => {
  return (    
    <div className='banner-container'>
    <div className="banner">
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="AddB/add (1).png" class="d-block w-100" alt="1"/>
    </div>
    <div class="carousel-item">
      <img src="AddB/add (2).png" class="d-block w-100" alt="2"/>
    </div>
    <div class="carousel-item">
      <img src="AddB/add (3).png" class="d-block w-100" alt="3"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>
  )
}

export default Add    