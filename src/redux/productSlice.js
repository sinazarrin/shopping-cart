import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../common/client";

export const fetchProducts = createAsyncThunk("products/productsFetch", async() => {
    const response = await client.get('products')
    return response
})


const initialState = {
    status:"idle",
    items:[],
    selectedCategory: 'all'
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    },
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

export const {filterCategory} = productSlice.actions
export default productSlice.reducer