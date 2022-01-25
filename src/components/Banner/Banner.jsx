import Search from './../Filter/Search'
import './banner.css'

const Banner = () => {
    return (
        <>
            <div class="header banner">
                <div class="content-banner">
                    <h1 class="title-banner">بــاز اســـت</h1>
                    <p class="subTitle-banner">
                        استـور لــند همیشه بازه....  ما اینجاییم تا محصولاتی با کیفیت و با بهترین قیمت در رده ی بازار به شما معرفی کنیم. 
                        <br />
                        همین حالا به خانواده ی بزرگ استـورلــند بپیوندید و از تخفیف های ویژه ی ما برخوردار شوید.
                    </p>
                    <Search />
                </div>
            </div>
        </>
    )
}

export default Banner
