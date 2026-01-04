
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Product from '../components/Product'
import About from '../components/About'
import Service from '../components/Service'
import Productdetails from '../components/Productdetails'
export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/product/name" element={<Productdetails />} />
      </Routes>

  )
}
