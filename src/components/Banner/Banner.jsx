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
                    <div class="search-banner">
                        <form method="get" action="#" class="search-from">
                            <input
                                class="search-field"
                                type="text"
                                placeholder="محصول مورد نظرت رو پیدا کن"
                            />
                            <button class="search-submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
