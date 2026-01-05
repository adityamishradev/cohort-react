
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Product from '../components/Product'
import About from '../components/About'
import Service from '../components/Service'
import Productdetails from '../components/Productdetails'
import ServiceDeatils from '../components/ServiceDeatils'
export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
         <Route path="/product/detail/:name" element={<Productdetails />} />{/* s2 */}
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} >
        <Route path="/service/details" element={<ServiceDeatils/>} />{/* s3 */}
        </Route>
       {/* 
Pehle ServiceDetails alag page par open hota tha.
Ab hume same Services page ke andar hi dikhana hai,
isliye Nested Routes aur <Outlet /> use kiya gaya hai.
*/}

      </Routes>

  )
}
