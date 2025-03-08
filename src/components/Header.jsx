import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchproducts } from '../redux/slice/productSlice'

const Header = ({fromHomeComponent}) => {
  const valueFromSearch=useDispatch()
  return (
    <div>

      <nav className='flex bg-blue-400 w-full fixed p-3 justify-between'>
        <Link to={"/"}><i className="fa-solid fa-truck-fast "></i> <span className='ml-2 '>Daily cart</span></Link>
        <ul className='flex items-center'>
      {
        fromHomeComponent?
        <li className='bg-white'>
        <input
        onChange={(e)=>valueFromSearch(searchproducts(e.target.value))}
         type='text' className='rounded p-1 ' style={{width:"300px"}} placeholder='search products here'></input>
      </li>:""
      }
        <li>
      <Link to={'/wishlist'}>
      <i className="fa-solid fa-heart text-red-600 p-2"></i>Wishlist<span className='p-1'>0</span></Link>
        </li>
        <li>
          <Link to={'/cart'}>
          <i className="fa-solid fa-cart-shopping text-green-900 p-1"></i>Cart
        <span className='p-2'>0</span>
          </Link>
        </li>
      
      </ul>
      </nav>
      
      
    </div>
  )
}

export default Header
