import { createSlice } from '@reduxjs/toolkit'
const initialState = {
data:[], // yaha data aata hain
}

const userState =createSlice({
    name:"user",
    initialState,
    reducers:{},
})
export default userSlice.reducer;// ye export karna hain store.jsx me
// ab store.jsx me jana hain aur reducer ko add karna hain
