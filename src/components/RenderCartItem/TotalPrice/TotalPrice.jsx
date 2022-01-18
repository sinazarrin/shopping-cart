import './totalPrice.css'
import { useSelector } from 'react-redux'
import {formatCurrency} from '../../formatCurrency'

const TotalPrice = () => {
    const totalPrice = useSelector(state => state.cart.totalPrice)
    return (
        <div class="basket-summary">
            <div class="basket-total">
                <h2>قیمت کل</h2>
                <span>{formatCurrency(totalPrice)}</span>
            </div>
            <a class="selenium-next-step-shipping">ادامه فرایند خرید</a>
        </div>
    )
}

export default TotalPrice
