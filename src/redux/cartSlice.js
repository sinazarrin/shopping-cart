import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        },
        removeCartItem: (state, action) => {
            const {id} = action.payload
            return state.filter(item=> item.id !== id)
        }
    }
})

export const {
    addToCart,
    removeCartItem
} = cartSlice.actions

export default cartSlice.reducer