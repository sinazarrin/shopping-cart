import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchProducts = createAsyncThunk("products/productsFetch", async() => {
    const response = await axios('products')
    return response.data
})


const initialState = {
    status:"idle",
    items:[]
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.status = 'pending'
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.status = 'success'
            state.items = action.payload
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = 'rejected'
        }
    }
})

export default productSlice.reducer