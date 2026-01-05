import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
const Productdetails = () => {
  const navigate = useNavigate();// useNavigate hook ka use hum programmatically navigation karne ke liye karte hain. s-2
    const params = useParams();// useParams hook ka use hum URL parameters ko access karne ke liye karte hain. s-3
  return (
    <div className='flex justify-center mt-30'>
        <h1>{params.name}</h1>
        <h1>Product Detail ....</h1>
        {/* onClick={() => navigate(-1)} is used to go back to the previous page */}
         <button onClick={() => navigate(-1)} className="bg-blue-500 text-white px-4 py-2 mb-5 rounded hover:bg-blue-600">Go Back.</button>
    </div>
  )
}

export default Productdetails