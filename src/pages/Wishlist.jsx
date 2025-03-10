import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWhishlist } from '../redux/slice/whishlistSlice'


const Wishlist = () => {
  const dispatch=useDispatch()
  const whishlistState=useSelector((state)=>state.whishListReducer)
  return (
    <div>
      <Header/>
      <div style={{ paddingTop: "80px" }} className="ms-3">
        {
          whishlistState?.length>0?<>
          <h1 className="text-3xl text-green-600 ">My Wishlist</h1>
          <div className="grid grid-cols-4 gap-5">
          { whishlistState?.map((val)=>(
       <div key={val?.id}  className="border shadow rounded pb-3">
         <img
           src={val?.thumbnail}
           alt=""
         />
         <div className="text-center">
           <h3 className="font-bold text-xl mb-5">
            {val?.title}
           </h3>
         </div>
         <div className="flex justify-evenly">
           <button className="text-xl"
           onClick={()=>removeFromWhishlist(val)}>
           <i className="fa-solid fa-heart-circle-xmark text-red-600"></i>
           </button>
           <button  className="text-xl"><i className="fa-solid fa-cart-shopping text-green-600"></i></button>
         </div>
       </div>
          ))
     
          }
          </div>
          
        </>:  <div className="flex justify-center"><img src="https://media3.giphy.com/media/0HhDnlH89djZtRqYoO/giphy.gif" alt="empty cart" />
       </div>
        }
        
      </div>
      
    </div>
  )
}

export default Wishlist
