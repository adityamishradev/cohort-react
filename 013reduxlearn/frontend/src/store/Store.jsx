import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice.jsx' // yaha userSlice import karna hain
export const store = configureStore({
  reducer: {user:userSlice,}, // yaha userSlice import karna hain upar se
})