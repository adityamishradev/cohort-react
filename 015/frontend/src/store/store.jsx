import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/userSlice.jsx'
import productSlice from './reducers/productSlice.jsx'
import cartSlice from './reducers/cartSlice.jsx'

export const store = configureStore({
  reducer: {
    // isme data Slice se aayega
    usersReducer:"userSlice",
    productReducer:"productSlice",
    cartReducer:"cartSlice",
  },
})
