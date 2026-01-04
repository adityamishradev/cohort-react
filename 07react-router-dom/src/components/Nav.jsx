import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='flex justify-center gap-10 p-5 bg-gray-900  w-full' >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/service">Service</Link>
    </div>
  )
}

export default Nav