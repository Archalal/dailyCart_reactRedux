import React from 'react';
import Header from '../components/Header';

const PNF = () => {
  
 

  return (
   <div>
    <Header />
     <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-4">
    
    <img
      className="w-full max-w-md mb-8"
      src="https://keenthemes.com/assets/media/vectors/auth-bundle/preview/palms/404_page_not_found.png"
      alt="404 Error"
    />

   
    <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
    <p className="text-gray-600 mb-6 text-center">
      The page you're looking for doesn't exist
    </p>


    <button
      className="bg-blue-900 text-white px-6 py-2 rounded-lg "
    
    >
      Go Back Home
    </button>
  </div>
   </div>
  );
};

export default PNF;