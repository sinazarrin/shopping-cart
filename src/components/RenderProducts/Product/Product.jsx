import { useDispatch } from "react-redux"
import { addToCart, calcTotalPrice } from "../../../redux/cartSlice"
import { formatCurrency } from "../../formatCurrency"

const Product = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product))
    dispatch(calcTotalPrice())
  } 

  return (
    <div className="product-card">
      <a href="#" className="link-img-product">
        <img
          className="image-card"
          src={product.images[0]}
          alt=""
        />
      </a>
      <div className="description-card">
        <a href="">{product.title}</a>
      </div>
      <div className="status-card">
        <div className="status">
          <p>وضعیت: {product.productStatus}</p>
        </div>
        <div className="score">
          <i></i>
          <p>{product.score}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </p>
        </div>
      </div>
      <div className="price-card">
        <h3>{formatCurrency(product.price)}</h3>
      </div>
      <button className="add-to-basket" onClick={handleAddToCart}>اضافه به سبد خرید</button>
    </div>
  )
}

export default Product
