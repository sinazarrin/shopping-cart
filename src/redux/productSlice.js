import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../common/client";

export const fetchProducts = createAsyncThunk("products/productsFetch", async() => {
    const response = await client.get('products')
    return response
})

export const fetchSelectProduct = createAsyncThunk("products/fetchSelectProduct", async(id) => {
    const response = await client.get(`http://localhost:5000/products/?id=${id}`)
    return response
})

const initialState = {
    status:"idle",
    items:[],
    selectedCategory: 'all',
    selectProduct:{},
    selectProductStatus: 'idle'
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        getItem:(state, action)=>{
            state.selectProduct = action.payload
        }
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.status = 'pending'
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.status = 'success'
            state.items = action.payload
        },
        [fetchProducts.rejected]: (state) => {
            state.status = 'rejected'
        },
        [fetchSelectProduct.pending]: (state) => {
            state.selectProductStatus = 'pending'
        },
        [fetchSelectProduct.fulfilled]: (state, action) => {
            state.selectProductStatus = 'success'
            state.selectProduct = action.payload
        }
    }
})

export const {filterCategory, getItem} = productSlice.actions
export default productSlice.reducer