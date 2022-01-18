import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decreaseCart, increaseCart, removeCartItem, calcTotalPrice } from "../../../redux/cartSlice"
import { formatCurrency } from "../../formatCurrency"

const Item = ({ item }) => {
    const dispatch = useDispatch()

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(removeCartItem(item))
        dispatch(calcTotalPrice())
    }

    const handleIncrease = () => {
        dispatch(increaseCart(item))
        dispatch(calcTotalPrice())
    }

    const handleDecrease = () => {
        dispatch(decreaseCart(item))
        dispatch(calcTotalPrice())
    }
    return (
        <div class="basket-item">
            <div class="item-image">
                <img src={item.images[0]} alt="" />
            </div>
            <div class="item-detail">
                <div class="item-description">
                    <h2 class="product-name">
                        {item.title}
                    </h2>
                    <h3 class="product-color">رنگ محصول: {item.color}</h3>
                    {/* <h3 class="product-size">اندازه محصول</h3> */}
                </div>

                <div class="item-cty">
                    <div class="content-cty">
                        <button onClick={handleIncrease} class="basket-change-quantity decrease-quantity-btn">
                            +
                        </button>
                        <p class="item-quantity">{item.qty}</p>
                        <button onClick={handleDecrease} disabled={item.qty <= 1} class="basket-change-quantity increase-quantity-btn">
                            -
                        </button>
                    </div>
                </div>

                <div class="item-price">
                    <p>{formatCurrency(item.price * item.qty)}</p>
                    <a href="" onClick={handleDelete}>حذف کردن</a>
                </div>
            </div>
        </div>
    )
}

export default Item
