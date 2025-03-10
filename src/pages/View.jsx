import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../redux/slice/singleProductSlice'
import { addToWhishlist } from '../redux/slice/whishlistSlice'





const View = () => {
  const dispatchView=useDispatch()
  const {id}=useParams()
  console.log(id)

  const {sProducts}=useSelector(
    (state)=>
    state.singleProductReducer
  )
  console.log(sProducts);

  const whishlistState=useSelector((state)=>state.whishListReducer)
  console.log(whishlistState);
  

  const onAddToWhishList=(product)=>{

    const existingProduct=whishlistState.find((a)=> a.id==product.id)
      if(existingProduct){
        alert("product where already in the whishlist please  checkOut")
      }
      else{
        dispatchView(addToWhishlist(product))
      }

  }
  

  useEffect(()=>{
    dispatchView(fetchProductById(id))
  },[])
  return (
    <div>
      <Header />
      
    {
        <div className="grid grid-cols-2" style={{paddingTop:"80px"}}>
        <div>
          <img style={{height:"450px"}} src={sProducts.images} alt=""  />
          <div className='flex justify-between'>
            <button 
            onClick={()=>onAddToWhishList(sProducts)}
            
            className='border p-2 mt-1 rounded'>add to wishlist</button>
            <button className='border p-2 mt-1 rounded'>add to cart</button>
          </div>
        </div>
        <div className='ml-2'>
          <h6 className='font-bold'>PID:1</h6>
          <h1 className='font-bold text-xl'>{sProducts.title}</h1>
          <h4 className='text-blue-600 text-xl font-bold'>{sProducts.price}</h4>
          <p>{sProducts.brand}</p>
          <p>{sProducts.category}</p>
          <p><span className='font-bold'>{sProducts.description}</span></p>
          <h4 className='mt-2'>Client Reviews</h4>
          <div>
           {
            sProducts.reviews?.map((a,index)=>(
              <div key={index}className="border border-red-50 shadow p-3 m-1 rounded">
              <p><span>{a.reviewerName}:</span>Lorem ipsum dolor sit.</p>
              <p>{a.rating}</p>
              <p>{a.comment}</p>
            </div>
            ))
           }
            
          </div>
        </div>
        
        </div>
    }
     
    </div>
  )
}

export default View
