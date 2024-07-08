import React from 'react'
import "./shop.css";
const Shop = () => {
  return (
    <div className="containerShop">
      <div className="shop shop1">
        <h3>Shop Student Essentials</h3>
        <div className="products">
          <div class="card" style={{ width: "10rem" }}>
            <img src="shop/students/stu.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Books</h5>
            </div>
          </div>
          <div class="card" style={{ width: "10rem" }}>
            <img style={{height:"200px"}} src="shop/students/stu (1).webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Pens</h5>
            </div>
          </div>
          <div class="card" style={{ width: "10rem" }}>
            <img src="shop/students/stu (2).webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Shirts</h5>
            </div>
          </div>
          <div class="card" style={{ width: "10rem" }}>
            <img src="shop/students/stu (3).webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Mac</h5>
            </div>

          </div>

        </div>
      </div>

      <div className="shop shop2">
        <h3>Monsoon Essentials</h3>
        <div className="products">
          <div class="card" style={{ width: "10rem" }}>
            <img src="shop/monsoon/mon.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Grip</h5>
            </div>
          </div>
          <div class="card" style={{ width: "10rem" }}>
            <img src="shop/monsoon/mon (1).webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Umbrella</h5>
            </div>
          </div>
          <div class="card" style={{ width: "10rem" }}>
            <img src="shop/monsoon/mon (2).webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Lamp</h5>
            </div>
          </div>
          <div class="card" style={{ width: "10rem" }}>
            <img src="shop/monsoon/mon (3).webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Belt & Purse</h5>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Shop