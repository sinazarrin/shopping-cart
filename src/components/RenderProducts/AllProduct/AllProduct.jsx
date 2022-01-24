import { useSelector } from 'react-redux'
import './allProduct.css'
import Product from '../Product'


const AllProduct = () => {
  const products = useSelector(state => state.products.items)
  const selectedCategory = useSelector(state => state.products.selectedCategory)

  const showProduct = products
    .filter(product => {
      if (selectedCategory === 'all') {
        return product
      }
      return selectedCategory === product.category
    })
    .map(product => {
      return <Product key={product.id} product={product} isActive={false}/>
    })

  return (
    <div className="product-container">
      <div className="product">
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
