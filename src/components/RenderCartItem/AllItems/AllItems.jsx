import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Item from '../Item'
import emptyCart from './empty-cart.jpg'
import './allItems.css'

const AllItems = () => {
    const cart = useSelector(state => state.cart.cartItem)
    const showItem = cart.map(item => {
        return <Item key={item.id} item={item} />
    })
    

    return (
        <>
            <div class="basket-container">
                <h2>سبد شما ({cart.length})</h2>
                {cart.length === 0 ?
                    <>
                        <div className="empty-cart">
                            <img src={emptyCart} alt="emptyImage" />
                            <div className="empty-cart-text">
                                <p>هیچ آیتمی در سبد شما قرار نگرفته :(</p>
                                <Link to="/">
                                    برگشت به صفحه ی اصلی
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </>
                    :
                    showItem
                }
            </div>
        </>
    )
}

export default AllItems
