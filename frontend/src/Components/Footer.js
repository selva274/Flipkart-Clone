import React from 'react'
import "./footer.css";
const Footer = () => {
  return (
    <>
    <div className="footer">
      
<footer class="text-center text-lg-start bg-dark text-white">

  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
   <marquee>
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    </marquee>

    <div>
      
        <i class="fab fa-facebook-f"></i>      
       <i class="fab fa-twitter"></i>
        <i class="fab fa-google"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-github"></i>
    </div>
   
  </section>

  <section class="">
    <div class="containerfooter text-center text-md-start mt-5">
    
      <div class="row mt-3">
       
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>FlipCartStore
          </h6>
          <p>
          Amazon Offers an Array Of Unique Products From Thousands Of Brands. Explore Your One-Stop-Shop For All Your Requirements. Shop Online Today!
          </p>
        </div>
      
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Electronics</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Fashion & Styles</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Study</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Toys</a>
          </p>
        </div>
    
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>
    
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> Karur,India</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            selvakumard274@flipkart.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 91 123 456 7890</p>
          <p><i class="fas fa-print me-3"></i> + 01 0987 654 321</p>
        </div>       
      </div>
    
    </div>
  </section>

  <div class="text-center p-4" style={{"background-color": "rgba(0, 0, 0, 0.05);"}}>
    © 2025 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">FlipkarClone.com</a>
  </div>
 
</footer>

    </div></>
  )
}

export default Footer