import './cartPage.css'
import AllItems from './../../components/RenderCartItem/AllItems'
import TotalPrice from '../../components/RenderCartItem/TotalPrice'

const CartPage = () => {
    return (
        <>
            <div class="basket">
                <AllItems />
                <TotalPrice />
            </div>
        </>
    )
}

export default CartPage
