import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../common/client";

export const fetchProducts = createAsyncThunk("product/productsFetch", async() => {
    const response = await client.get('products')
    return response
})

export const fetchSelectProduct = createAsyncThunk("product/fetchSelectProduct", async(id) => {
    const response = await client.get(`http://localhost:5000/products?id=${id}`)
    return response
})

export const fetchSearchProduct = createAsyncThunk("product/fetchSearchProduct", async(search) => {
    const response = await client.get(`products?q=${search}`)
    return response
})

const initialState = {
    status:"idle",
    items:[],
    selectedCategory: 'all',
    selectProduct:[],
    selectProductStatus: 'idle',
    search:'',
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        removeSelectProduct: (state) => {
            state.selectProduct = []
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
            state.status = 'error'
        },
        [fetchSelectProduct.pending]: (state) => {
            state.selectProductStatus = 'pending'
        },
        [fetchSelectProduct.fulfilled]: (state, action) => {
            state.selectProductStatus = 'success'
                
                
                action.payload.map(item => state.selectProduct = item )
           
        },
        [fetchSearchProduct.pending]: (state) => {
            state.status = 'pending'
        },
        [fetchSearchProduct.fulfilled]: (state, action) => {
            state.items = []
            state.items.push(...action.payload)
            state.status = 'success'
        },
        
    }
})

export const {filterCategory, removeSelectProduct, updateSearch} = productSlice.actions
export default productSlice.reducer