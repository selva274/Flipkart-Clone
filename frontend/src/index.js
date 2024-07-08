import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import Add from './Components/Add';
import Electronics from './Components/Electronics';
import Toy from './Components/Toy';
import Shop from './Components/Shop';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Add/>
    <Electronics/>
    <Toy/>
    <Shop/>    
    <Footer/>
    <App />
  </React.StrictMode>
);
reportWebVitals();
