import { useSelector } from 'react-redux'
import './allProduct.css'
import Product from '../Product'
import PuffLoader from "react-spinners/PuffLoader";
import { useState } from 'react';


const AllProduct = () => {
  const products = useSelector(state => state.products.items)
  const status = useSelector(state => state.products.status)
  const selectedCategory = useSelector(state => state.products.selectedCategory)
  
  const [color] = useState('#2196f3')

  const showProduct = products
    .filter(product => {
      if (selectedCategory === 'all') {
        return product
      }
      return selectedCategory === product.category
    })
    .map(product => {
      return <Product key={product.id} product={product} isActive={false} />
    })


  return status === 'pending' || status === 'error' ? (
    <div className="loader">
      <PuffLoader color={color} size={150} />
    </div>
  ) : (
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
