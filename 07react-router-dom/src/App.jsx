import React from 'react'
import Home from './components/Home'

import About from './components/About'

import { Routes, Route } from 'react-router-dom'
import Service from './components/Service'
import Product from './components/Product'
import Nav from './components/Nav'
const App = () => {
  return (
    <div className='w-screen h-screen bg-gray-900 text-white' >
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>

      <Nav/>
    </div>
  )
}

export default App 