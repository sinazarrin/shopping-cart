import './productPage.css'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react"
import { addToCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSelectProduct, removeSelectProduct } from '../../redux/productSlice';
import { PuffLoader } from 'react-spinners';
import { formatCurrency } from '../../components/formatCurrency';

const ProductPage = () => {
  const products = useSelector(state => state.products.selectProduct)
  const selectProductStatus = useSelector(state => state.products.selectProductStatus)
  const cartItem = useSelector(state => state.cart.cartItem)
  const dispatch = useDispatch()
  
  const { productId } = useParams()
  
  const [isActive, setIsActive] = useState(false);
  const [allIndex, setAllIndex] = useState(0)
  const [color] = useState('#2196f3')


  const handleTab = (index) => {
    setAllIndex(index)
  }

  useEffect(() => {
    dispatch(fetchSelectProduct(productId))
    return () => {
      dispatch(removeSelectProduct())
    }
  }, [dispatch, productId]);


  const handleAddToCart = () => {
    dispatch(addToCart(products))
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    const isActiveItem = cartItem.find(item => item.id === products.id)
    isActiveItem ? setIsActive(true) : setIsActive(false)
  }, [cartItem, products.id]);
  
  
  return products.length === 0 ? (
    <>
      <div className="product-page-loader">
        <PuffLoader color={color} size={150} />
      </div>
    </>
  ) : (

    <>
      {
        // products.map(products => (
          <div className="product-details">
            <div className="details">
              <div className="big-img">
                <img src={products.images[allIndex]} alt="" />
              </div>
              <div className="box">

                <div className="row">
                  <h3>{products.title}</h3>
                  <span>{formatCurrency(products.price)}</span>
                </div>

                <p>{products.description}</p>
                <p>رنگ محصول: {products.color}</p>

                <div className="thumb">
                  {
                    products.images.map((img, index) => (
                      <img src={img}  alt="" key={index} onClick={() => handleTab(index)} className={index == allIndex ? 'opacity-none' : 'mini-image'}/>
                    ))
                  }
                </div>
                <button className={isActive ? "disabled-button" : "add-to-cart"} onClick={handleAddToCart} disabled={isActive}>{isActive ? "ایتم در سبد شما قرار گرفته" : 'اضافه به سبد خرید'}</button>
              </div>
            </div>
          </div>
        // ))
      }
    </>
  )
};

export default ProductPage;
