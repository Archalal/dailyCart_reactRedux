
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import View from './pages/View'
import Wishlist from './pages/Wishlist'
import PNF from './pages/PNF'
import Footer from './components/Footer'

function App() {
 
  return (
    <>
    <Routes>
      <Route element={<Home />} path='/'></Route>
      <Route element={<Cart />} path='/cart'></Route>
      <Route element={<Wishlist />} path='/wishlist'></Route>
      <Route element={<View />} path='/:id/view'></Route>
      <Route element={<PNF />} path='/*'></Route>
    </Routes>
    <Footer />
      
    </>
  )
}

export default App
