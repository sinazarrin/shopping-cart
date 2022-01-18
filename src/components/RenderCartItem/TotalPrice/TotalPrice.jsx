import './totalPrice.css'
import { useSelector } from 'react-redux'
import {formatCurrency} from '../../formatCurrency'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../../redux/cartSlice'

const TotalPrice = () => {

    const dispatch = useDispatch()

    const handleClearBtn = () => {
        dispatch(clearCart())
    }

    const totalPrice = useSelector(state => state.cart.totalPrice)
    return (
        <div class="basket-summary">
            <div class="basket-total">
                <h2>قیمت کل</h2>
                <span>{formatCurrency(totalPrice)}</span>
            </div>
            <button class="selenium-next-step-shipping">ادامه فرایند خرید</button>
            <button className="clear-btn" onClick={handleClearBtn}>سبد خریدتو خالی کن</button>
        </div>
    )
}

export default TotalPrice
