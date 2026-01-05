import React from 'react'
import { useNavigate } from 'react-router-dom'
const ServiceDeatils = () => {
  const navigate = useNavigate();// useNavigate hook ka use hum programmatically navigation karne ke liye karte hain. s-2
   
   return (
     <div >
         
       <p> Service Page par hum apni saari services ka overview dikhate hain.
Yahan user ko clear idea milta hai ki hum kya offer karte hain aur kaise help kar sakte hain.
“More Details” button ke through user bina page reload ke same page ke andar hi service details dekh sakta hai, jo better user experience deta hai.
Is approach se website fast, clean aur professional feel karti hai.</p>
<br />
         {/* onClick={() => navigate(-1)} is used to go back to the previous page */}
          <button onClick={() => navigate(-1)} className="bg-blue-500 text-white px-4 py-2 mb-5 rounded hover:bg-blue-600">Go Back.</button>
          
     </div>
     
   )
}

export default ServiceDeatils
                        