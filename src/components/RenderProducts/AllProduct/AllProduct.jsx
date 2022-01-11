import './allProduct.css'

const AllProduct = () => {
    return (
        <div className="product-container">
        <div className="product">
          <h2 className="product-title">محصولات</h2>

          <div className="product-contect">
            <div className="product-boxes">
              <div className="product-card">
                <a href="#" className="link-img-product">
                  <img
                    className="image-card"
                    src="./img/79f4b1e3c31fb22fa193ea1393e2cb8e8a5863cc_1605085571.jpg"
                    alt=""
                  />
                </a>
                <div className="description-card">
                  <a href="">لپ تاپ 13 اینچی اپل مدل MacBook Air MGN63 2020</a>
                </div>
                <div className="status-card">
                  <div className="status">
                    <p>وضعیت: موجود</p>
                  </div>
                  <div className="score">
                    <i></i>
                    <p>⭐4.5</p>
                  </div>
                </div>
                <div className="price-card">
                  <h3>39,000 تومان</h3>
                </div>
                <button className="add-to-basket">اضافه به سبد خرید</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AllProduct
