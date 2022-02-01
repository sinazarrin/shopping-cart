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
                <img src={item.images[0]} alt={item.title} />
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
                    <a href="" onClick={handleDelete}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                        حذف کردن 
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Item
