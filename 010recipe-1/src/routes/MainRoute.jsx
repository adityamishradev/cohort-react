import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Create from '../pages/Create.jsx'
import Recipes from '../pages/Recipes.jsx'
const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </div>
  )
}

export default MainRoute