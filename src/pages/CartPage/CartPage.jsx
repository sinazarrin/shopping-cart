import './cartPage.css'
import AllItems from './../../components/RenderItemsCart/AllItems'
import TotalPrice from '../../components/RenderItemsCart/TotalPrice'

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
