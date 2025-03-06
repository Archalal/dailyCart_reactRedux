import React from 'react'
import Header from '../components/Header'

const Wishlist = () => {
  return (
    <div>
      <Header/>
      <div style={{paddingTop:"80px"}} className='ms-3'>
        <>
        <h3>Wishlist</h3>
        <div className="grid grid-cols-4 gap-5">
            <div className='border shadow rounded m-5 p-3 '>
            <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="" />
            <div className="text-center">
              <h2 className='p-2 font-bold text-lg'>Muhammed fazil(pushpu)</h2>
             
            </div>
            <div className=' flex justify-evenly'>
           <button>
           <i className="fa-solid fa-heart-circle-xmark text-red-800"></i>
           </button>
           <button>
           <i className="fa-solid fa-cart-plus text-green-800"></i>
           </button>
            </div>
            </div>
           
          </div>
        </>

      </div>
      
    </div>
  )
}

export default Wishlist
