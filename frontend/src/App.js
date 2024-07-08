import React from 'react'
import Navbar from './Components/Navbar'
import Add from './Components/Add';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Electronics from './Components/Electronics';
import Toy from './Components/Toy';
import Shop from './Components/Shop';
import Footer from './Components/Footer';
import Main from './Main';
const App = () => {
  return(
   
   <BrowserRouter>
    <Routes>   
 
      <Route path='/' element={<Main/>}/>
      <Route path='/electronics' element={<Electronics/>}/>
      <Route path='/toy' element={<Toy/>}/>
      <Route path='/Shop' element={<Shop/>}/>      
    </Routes>
   </BrowserRouter>
   
  )
}

export default App