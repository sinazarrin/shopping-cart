import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../common/client";

export const fetchProducts = createAsyncThunk("products/productsFetch", async() => {
    const response = await client.get('products')
    return response
})

export const fetchSearchProduct = createAsyncThunk("products/fetchSearchProduct", async(search) => {
    const response = await client.get(`http://localhost:5000/products?q=${search}`)
    return response
})

const initialState = {
    status:"idle",
    items:[],
    selectedCategory: 'all',
    selectProduct:{},
    selectProductStatus: 'idle',
    search:''
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        updateSearch: (state, action) => {
            state.search = action.payload
        },
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
        [fetchSearchProduct.pending]: (state) => {
            state.status = 'pending'
        },
        [fetchSearchProduct.fulfilled]: (state, action) => {
            state.items = []
            state.items.push(...action.payload)
            state.status = 'success'
        }
    }
})

export const {filterCategory, getItem, updateSearch} = productSlice.actions
export default productSlice.reducer