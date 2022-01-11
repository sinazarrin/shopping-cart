import './allItems.css'

const AllItems = () => {
    return (
        <>
            <div class="basket-container">
                <h2>سبد شما (1)</h2>
                <div class="basket-item">
                    <div class="item-image">
                        <img src="./images/1410181.jpg" alt="" />
                    </div>
                    <div class="item-detail">
                        <div class="item-description">
                            <h2 class="product-name">
                                اسم محصول---------------
                            </h2>
                            <h3 class="product-color">رنگ محصول</h3>
                            <h3 class="product-size">اندازه محصول</h3>
                        </div>

                        <div class="item-cty">
                            <div class="content-cty">
                                <button class="basket-change-quantity decrease-quantity-btn">
                                    +
                                </button>
                                <p class="item-quantity">0</p>
                                <button class="basket-change-quantity increase-quantity-btn">
                                    -
                                </button>
                            </div>
                        </div>

                        <div class="item-price">
                            <p>$100</p>
                            <a href="">حذف کردن</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllItems
