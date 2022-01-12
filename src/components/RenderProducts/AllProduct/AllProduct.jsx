import { useSelector } from 'react-redux'
import './allProduct.css'
import Product from '../Product'


const AllProduct = () => {
  const products = useSelector(state => state.products.items)

  const showProduct = products.map(product => {
    return <Product product={product} />
  })

  return (
    <div className="product-container">
      <div className="product">
        <h2 className="product-title">محصولات</h2>

        <div className="product-contect">
          <div className="product-boxes">
            {showProduct}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllProduct
