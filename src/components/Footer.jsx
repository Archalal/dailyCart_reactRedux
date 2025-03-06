import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-blue-500'>
      <div className='grid grid-cols-4  p-4 gap-5 m-3 '>
       
        <div>
          <span  className='text-xl font-bold' ><i className="fa-solid fa-truck-fast "></i>Daily Cart</span>
          <p> Designed and buit with all the love in the world by the team with the help of our Contributors</p>
        </div>
        <div>
          <h2 className='text-xl font-bold'>Links</h2>
          <Link to={"/*"}><h4>Landing page</h4></Link>
          <Link to={""}><h4>Home Page</h4></Link>
          <Link to={""}><h4>Watching History page</h4></Link>

        </div>
        <div>
          <h2  className='text-xl font-bold'>Guides</h2>
          <h4>React</h4>
          <h4>React Bootstrap</h4>
          <h4>React Router</h4>
        </div>
        <div>
          <h2  className='text-xl font-bold'>Contact US</h2>
          <div className='flex gap-3'>
          <label htmlFor="email" className=" bg-white block text-sm/6 font-medium text-gray-400 border rounded  " style={{width:"200px",height:"35px"}}>
              Enter your  Email address
              </label>
              <button><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='flex gap-5'>
           <Link to={""}> <span><i className="fa-brands fa-twitter"></i></span></Link>
           <Link to={""}> <span><i className="fa-brands fa-instagram"></i></span></Link>
           <Link to={""}> <span><i className="fa-brands fa-facebook-f"></i></span></Link>
          <Link to={""}>  <span><i className="fa-brands fa-linkedin"></i></span></Link>
         <Link to={""}>  <span><i className="fa-brands fa-github"></i></span></Link>
          <Link to={""}>  <span><i className="fa-solid fa-phone"></i></span></Link>
          </div>
        </div>

      </div>
      <div className='text-center m-4 p-3'>
        <span> Copyright <i className="fa-regular fa-copyright"></i> March 2025,Daily Cart.Buit with React Redux</span>
      </div>
    </div>
  )
}

export default Footer
