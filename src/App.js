import './App.css';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import BlogPage from './pages/BlogPage'
import CartPage from './pages/CartPage'
import AboutUs from './pages/AboutUsPage'
import Footer from './components/Footer/Footer';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
