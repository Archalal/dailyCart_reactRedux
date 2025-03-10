import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { fetchAllProducts } from '../redux/slice/productSlice'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {
  const dispatch=useDispatch()
  const {allProducts,loading,error}=useSelector((state)=>state.productReducer)
  console.log(allProducts,loading,error);

  
  
  useEffect(()=>{
   dispatch( fetchAllProducts())
  },[])
  return (
    <div>
      <Header  fromHomeComponent={true}/>
      <div style={{paddingTop:"60px"}}>
        <>
        
         {
          loading?(
          
          <div className='flex justify-center'>
            <img src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif" alt=""  />
          </div>
          
         
          ):
          <div className="grid grid-cols-4 gap-5">
            {
                allProducts?.length>0? allProducts?.map( (products,index)=>(
                  <div key={index} >
                  <div className='border shadow rounded m-5 p-3 '>
                  <img src={products.thumbnail} alt="" />
                  <div className="text-center">
                    <h2 className='p-2 font-bold text-lg'>{products.title}</h2>
                    <Link  to={ `/${products.id}/view`}className='border-1 rounded  bg-violet-500 p-1'> 
                   View more
                    </Link>
                  </div>
                  </div>
                 
                </div>
                 )):
                 <div>
                  <p>not found</p>
                 </div>
            }

          </div>
      
         }
        
        </>

      </div>
      
    </div>
  )
}

export default Home
