import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    cartItem: [],
    totalQuantity:0,
    totalPrice:0
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
        },
        calcTotalPrice: (state) => {
            const finalPrice = state.cartItem.reduce((acc, curr) => {
                return (acc += curr.price * curr.qty);
            }, 0)
            state.totalPrice = finalPrice
        },
    }
})

export const {
    addToCart,
    removeCartItem,
    increaseCart,
    decreaseCart,
    calcTotalPrice
} = cartSlice.actions

export default cartSlice.reducer