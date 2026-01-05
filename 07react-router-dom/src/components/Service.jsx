import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const Service = () => {
  const navigate = useNavigate(); 
  // useNavigate hook ka use hum programmatically navigation karne ke liye karte hain

  return (
    <div>
      <h1 className='mb-3 font-thin text-4xl'>Service</h1>

      {/* Button click par Service Details page open hoga */}
      <button 
        onClick={() => navigate('/service/details')} 
        className="bg-blue-500 text-white px-4 py-2 mb-5 rounded hover:bg-blue-600"
      >
        More Details
      </button>

      <hr />

      {/* Child route yahin render hoga */}
      <Outlet />
    </div>
  )
}

export default Service
