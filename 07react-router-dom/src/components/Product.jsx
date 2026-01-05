// import react router dom useNavigate hook
import React from 'react'
import { useNavigate } from 'react-router-dom'
const Product = () => {
  // useNavigate React Router ka ek hook hai, jiska use hum programmatically page change (navigation) karne ke liye karte hain — bina <Link> pe click kiye.
  const navigate = useNavigate();


  const NavigateHandler = (Name) => {
    // navigate to product details page
    navigate(`/product/detail/${Name}`);
  }

  return (
    <div>
      <h1 className="text-2xl font-thin mb-5 px-17">Product</h1>

      <div className="mb-5 px-17">
        <h1 className="text-2xl font-thin">Product 1</h1>
        
        <button onClick={() => NavigateHandler("Product 1")} className="bg-blue-500 text-white px-4 py-2 mb-5 rounded hover:bg-blue-600">see Details</button>
      </div>


      <div className="mb-5 px-17">
        <h1 className="text-2xl font-thin">Product 2</h1>
        <button onClick={() => NavigateHandler("Product 2")} className="bg-blue-500 text-white px-4 py-2 mb-5 rounded hover:bg-blue-600">see Details</button>
      </div>

      <div className="mb-5 px-17">
        <h1 className="text-2xl font-thin">Product 3</h1>
        <button onClick={() => NavigateHandler("Product 3")} className="bg-blue-500 text-white px-4 py-2 mb-5 rounded hover:bg-blue-600">see Details</button>
      </div>

      <div className="mb-5 px-17">
        <h1 className="text-2xl font-thin">Product 4</h1>
        <button onClick={() => NavigateHandler("Product 4")} className="bg-blue-500 text-white px-4 py-2 mb-5 rounded hover:bg-blue-600">see Details</button>
      </div>


    </div>
  )
}

export default Product