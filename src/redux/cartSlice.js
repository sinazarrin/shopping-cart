import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    cartItem:[]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItem.push(action.payload)
        },
        removeCartItem: (state, action) => {
            const {id} = action.payload
            state.cartItem = state.cartItem.filter(item => item.id !== id)
        },
    }
})

export const {
    addToCart,
    removeCartItem
} = cartSlice.actions

export default cartSlice.reducer