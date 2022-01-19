import './App.css';
import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import HomePage from './pages/HomePage';
import NavBar from './components/NavBar'
import BlogPage from './pages/BlogPage'
import CartPage from './pages/CartPage'
import AboutUs from './pages/AboutUsPage'
import Footer from './components/Footer/Footer';
import NotFoundPage from './pages/NotFoundPage';


const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <ToastContainer rtl/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
