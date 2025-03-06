import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <div>
      <Header />
      
      <div className="grid grid-cols-2" style={{paddingTop:"80px"}}>
        <div>
          <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-young-blonde-with-short-hair-on-orange-background-free-image.jpeg?h=800&quality=80" alt="" />
          <div className='flex justify-between'>
            <button className='border p-2 mt-1 rounded'>add to wishlist</button>
            <button className='border p-2 mt-1 rounded'>add to cart</button>
          </div>
        </div>
        <div className='ml-2'>
          <h6 className='font-bold'>PID:1</h6>
          <h1 className='font-bold text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
          <h4 className='text-blue-600 text-xl font-bold'>9.99</h4>
          <p>brand:essence</p>
          <p>Category</p>
          <p><span className='font-bold'>Description:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nisi ut. Expedita, vitae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ratione velit eveniet magnam. Officiis, cumque!</p>
          <h4 className='mt-2'>Client Reviews</h4>
          <div>
            <div className="border border-red-50 shadow p-3 m-1 rounded">
              <p><span>John die:</span>Lorem ipsum dolor sit.</p>
              <p>Rating:2</p>
            </div>
            
          </div>
        </div>
        
        </div>
     
    </div>
  )
}

export default View
