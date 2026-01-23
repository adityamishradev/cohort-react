// cart slice banega yaha pe
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  Products: [],
}
export const productSlice = createSlice({
  name: 'product',
  initialState,     
    reducers: {
    loadProducts: (state, action) => {
        state.Products(action.payload)            
    },          


    },      
})

export const { loadProducts } = productSlice.actions
export default productSlice.reducer
