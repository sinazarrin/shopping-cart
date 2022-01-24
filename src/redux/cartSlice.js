import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'

const initialState = {
    cartItem: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItem.push(action.payload)
            toast.success(`${action.payload.title} به سبد خرید اضافه شد`, {
                position: "top-right",
                autoClose: 2500,
                // rtl:true
            })
        },
        removeCartItem: (state, action) => {
            const { id } = action.payload
            state.cartItem = state.cartItem.filter(item => item.id !== id)
            toast.error('آیتم مورد نظر از سبد شما حذف شد', {
                position: "top-right",
                autoClose: 2500,
            })
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
        clearCart: (state) => {
            if (state.cartItem.length > 0) {
                toast.error('سبد خرید خالی شد', {
                    position: "top-right",
                    autoClose: 2500,
                })
            }
            state.cartItem = []
        },submitProducts:(state) => {
            if (state.cartItem.length > 0) {
                toast.success('پرداخت با موفقیت انجام شد', {
                    position: "top-right",
                    autoClose: 2500,
                })
            }
            state.cartItem = []
        }
    }
})

export const {
    addToCart,
    removeCartItem,
    increaseCart,
    decreaseCart,
    calcTotalPrice,
    clearCart,
    submitProducts
} = cartSlice.actions

export default cartSlice.reducer