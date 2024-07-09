import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Electronics from './Components/Electronics';
import Toy from './Components/Toy';
import Shop from './Components/Shop';
import Main from './Main';
import Login from './Components/Login';
import Signup from './Components/Signup';
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
      </Routes>
    </BrowserRouter>

  )
}

export default App