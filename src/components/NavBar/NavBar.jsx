import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './navBar.css'

const NavBar = () => {

    const [statusBurgerMenue, setStatusBurgerMenue] = useState(false)
    const cart = useSelector(state => state.cart)

    return (
        <header>
            <nav className="content-header">

                <div className="menu-berger" onClick={() => setStatusBurgerMenue(!statusBurgerMenue)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>

                <div className="logo">
                    <h1 ><Link to="/">Store Land</Link></h1>
                </div>

                <div className={statusBurgerMenue === true ? 'nav-item left-0' : 'nav-item'}>
                    <ul>
                        <li>
                            <Link to='/' className="nav-link">
                                {/* <i className="fas fa-home"></i> */}
                                خانه
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className="nav-link">
                                {/* <i className="fas fa-pen"></i> */}
                                بلاگ
                            </Link>
                        </li>
                        <li>
                            <Link to="/about-us" className="nav-link">
                                {/* <i className="fas fa-plus"></i> */}
                                درباره ی ما
                            </Link>
                        </li>
                        <li>

                            <Link to="" className="nav-link">
                                {/* <i className="fas fa-bars"></i> */}
                                دسته بندی کالا ها
                            </Link>
                        </li>
                        {/* <li><a href="#" className="nav-link"> <i className="fas fa-user"></i> ورد به حساب کاربری</a></li>  */}
                    </ul>
                </div>

                <div className="header-item">
                    {/* <div className="login-slice">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <a href="#" className="login"> ورود</a>
                        <span className="space-login">/</span>
                        <a href="#" className="sign-up"> نام</a>
                    </div> */}

                    {/* <span className="middle-span">|</span> */}

                    <div className="basket-icon">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default NavBar
