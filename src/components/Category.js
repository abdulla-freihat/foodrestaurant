


 import React from 'react'
import { categories } from '../data/data'
 
 const Category = () => {
   return (
     <div className='max-w-[1640px] mx-auto py-12 px-4'>
     <h1 className='text-orange-500 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
     {/* display categories */}
     <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4'>
        {categories.map((item , index) =>(

            <div className='flex justify-between items-center w-full bg-gray-200 px-2 rounded-xl hover:scale-105 ' key={index}>
            <p className='font-bold text-lg' >{item.name}</p>
            <img className='h-[80px]' src={item.image} alt={item.name} />
                  
             </div>
        ))}
     </div>

     

     </div>
   )
 }
 
 export default Category