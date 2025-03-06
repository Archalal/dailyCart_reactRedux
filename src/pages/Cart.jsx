import React from 'react';
import Header from '../components/Header';

const Cart = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: '100px' }} className='p-7'>
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

        <div className="grid grid-cols-3 gap-4">
         
          <div className="col-span-2 border rounded shadow p-5">
           
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-2">#</th>
                  <th className="text-left py-2">Name</th>
                  <th className="text-left py-2">Image</th>
                  <th className="text-left py-2">Quantity</th>
                  <th className="text-left py-2">price</th>
                  <th className="text-left py-2">...</th>
               
                 
                </tr>
              </thead>
              <tbody>
              
                <tr>
                <td className="py-2">#</td>
                  <td className="py-2">Name</td>
                  <td className="py-2">
                    <img
                    width={"90px"} 
                    src="
                    https://media.ulta.com/i/ulta/2600088?w=720&fmt=png" alt="" />
                  </td>
                  <td className="py-2">Quantity</td>
                  <td className="py-2">
                    <div className='flex gap-1 items-center'>
                      <button className='border p-1 rounded'>+</button>
                      <input type="text" className='border font-bold  rounded 'style={{width:"40px"}}  value={0} readOnly/>
                      <button className='border p-1 rounded'>-</button>
                    </div>
                  </td>
                  <td className="py-2">
                  <i className="fa-solid fa-trash text-red-700"></i>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='float-right'>
              <button className='border rounded bg-red-600 p-2'>Empty cart</button>
              <button className='border rounded bg-blue-600 p-2 ms-3'>Shop More</button>
            </div>
          </div>

       
          <div className="border rounded shadow p-5">
            <h1 className="text-xl font-bold mb-4">Order Summary</h1>
            <p className="text-lg">
              Total Amount: <span className="text-red-700 font-bold">$9.99</span>
            </p>
            <button className='border p-1 bg-blue-400 rounded mt-4 w-full'>Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;