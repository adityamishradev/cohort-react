// import axios from "axios"
// import { useState } from "react"

// const App = () => {
// const [products, setproducts] = useState([])

// // gets product
//   const getproduct = () => {
//   const api = "https://fakestoreapi.com/products"

//     axios.get(api)
//       .then((response) => {
//         console.log(response.data)
//         setproducts(response.data)   // ✅ correct setter
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }
//    console.log(products)
// //   add product

// const addproduct = () => {
//     const api = "https://fakestoreapi.com/products"

//     axios.post(api)
//       .then((response) => {
//         console.log(response.data) // actual data
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }

//   return (
//     <div>
//       <button onClick={getproduct}>Get Products</button>
//       <br />
//       <br />
//       <button onClick={addproduct}>addProducts</button>
      
//       <ul>
//         {products.length > 0 ? (
//           products.map((p) => (
//             <li key={p.id}>{p.title}</li>
//           ))
//         ) : (
//           <p>No Products</p>
//         )}
//       </ul>
//     </div>
//   )
// }

// export default App

// ********************************************************************************************************
/* isko use kr rha tau jab botton pr click krta hu tau data show hota hain is problem ke liye useeffect use kiya

 =>  page open hote hi data show ho uske liye useeffect use krte hain ka  */


import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {
  const [products, setproducts] = useState([])
  const [loading, setLoading] = useState(false)

  // 🔹 GET PRODUCTS
  const getProducts = async () => {
    try {
      setLoading(true)
      const res = await axios.get("https://fakestoreapi.com/products")
      setproducts(res.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  // 🔹 ADD PRODUCT
  const addProduct = async () => {
    try {
      const res = await axios.post(
        "https://fakestoreapi.com/products",
        {
          title: "New React Product",
          price: 999,
          description: "Added from React App",
          image: "https://i.pravatar.cc",
          category: "electronics",
        }
      )

      console.log("Added:", res.data)

      // 🔥 add ke baad list update
      setproducts((prev) => [...prev, res.data])
    } catch (error) {
      console.log(error)
    }
  }

  // 🔥 PAGE LOAD → GET PRODUCTS
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <h2>Products</h2>

      <button onClick={addProduct}>Add Product</button>
      <br /><br />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App

