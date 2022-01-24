import './productPage.css'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react"
import { addToCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

const ProductPage = () => {
  const products = useSelector(state => state.products.selectProduct)
  const [index, setIndex] = useState(0)
  const dispatch = useDispatch()
  const cartItem = useSelector(state => state.cart.cartItem)
  const [isActive, setIsActive] = useState(false);
  const [showDescription, setShowDescription] = useState(false)

  const handleTab = (index) => {
    setIndex(index)
  }

  const handleAddToCart = () => {
    dispatch(addToCart(products))
  }
  useEffect(() => {
    const isActiveItem = cartItem.find(item => item.id === products.id)
    isActiveItem ? setIsActive(true) : setIsActive(false)
  }, [cartItem, products.id]);

  return (
    <div className="product-details">
      {
        <div className="details">
          <div className="big-img">
            <img src={products.images[index]} alt="" />
          </div>
          <div className="box">

            <div className="row">
              <h3>{products.title}</h3>
              <span>{products.price}تومان</span>
            </div>

            <p>{`${showDescription ? products.description : products.description.substr(0, 346) + '...'}`} <button className='more' onClick={() => setShowDescription(!showDescription)}>ادامه مطلب</button></p>
            <p>رنگ محصول: {products.color}</p>

            <div className="thumb">
              {
                products.images.map((img, index) => (
                  <img src={img} alt="" key={index} onClick={() => handleTab(index)} />
                ))
              }
            </div>
            <button className={isActive ? "disabled-button" : "add-to-cart"} onClick={handleAddToCart} disabled={isActive}>{isActive ? "ایتم در سبد شما قرار گرفته" : 'اضافه به سبد خرید'}</button>
          </div>
        </div>
      }
    </div>
  )
};

export default ProductPage;
