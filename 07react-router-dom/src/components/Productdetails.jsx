import React from 'react'
import { useNavigate } from 'react-router-dom'
const Productdetails = () => {
  const navigate = useNavigate();
  return (
    <div>
        <h1>Product Name</h1>
        <h1>Product Detail</h1>
        {/* onClick={() => navigate(-1)} is used to go back to the previous page */}
         <button onClick={() => navigate(-1)} className="bg-blue-500 text-white px-4 py-2 mb-5 rounded hover:bg-blue-600">Go Back.</button>
    </div>
  )
}

export default Productdetails