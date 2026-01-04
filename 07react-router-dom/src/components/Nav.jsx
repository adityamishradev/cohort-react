import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='flex justify-center gap-10 p-5 bg-gray-900  w-full' >
      <NavLink className={({ isActive }) =>
        isActive ? "text-blue-500" : "text-white"
      }
        to="/">Home</NavLink>
      <NavLink className={({ isActive }) =>
        isActive ? "text-blue-500" : "text-white"
      } to="/about">About</NavLink>
      <NavLink className={({ isActive }) =>
        isActive ? "text-blue-500" : "text-white"
      } to="/products">Products</NavLink>
      <NavLink className={({ isActive }) =>
        isActive ? "text-blue-500" : "text-white"
      } to="/service">Service</NavLink>
    </div>
  )
}
// agar hame dekhna hain kis routes pr hain tau  link tag ke jaga NavLink tag use karain gy ye active route ko highlight kar day ga -> read react-router-dom docs for NavLink
export default Nav