import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    cartItem: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItem.push(action.payload)
        },
        removeCartItem: (state, action) => {
            const { id } = action.payload
            state.cartItem = state.cartItem.filter(item => item.id !== id)
        },
        increaseCart: (state, action) => {
            const item = action.payload
            state.cartItem.map(product => product.id === item.id ? product.qty = product.qty += 1 : '')
        },
        decreaseCart: (state, action) => {
            const item = action.payload
            state.cartItem.map(product => product.id === item.id ? product.qty = product.qty -= 1 : '')
        }
    }
})

export const {
    addToCart,
    removeCartItem,
    increaseCart,
    decreaseCart
} = cartSlice.actions

export default cartSlice.reducer