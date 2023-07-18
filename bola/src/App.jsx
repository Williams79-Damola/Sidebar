import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import './App.css'
import Dashboard from './Pages/Dashboard';
import Comment from './Pages/Comment';
import About from './Pages/About';
import Product from './Pages/Product';
import Productlit from './Pages/Productlit';
import Analytics from './Pages/Analytics';

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/comment' element={<Comment/>}/>
      <Route path='/analytics' element={<Analytics/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/productlit' element={<Productlit/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
  )
}

export default App
