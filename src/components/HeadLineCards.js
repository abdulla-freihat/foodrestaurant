




 import React from 'react'
 
 const HeadLineCards = () => {
   return (
     <div className=' max-w-[1640px] mx-auto p-4 py-12 md:grid md:grid-cols-3 gap-6'>

        <div className='rounded-full relative mb-3  '>
            
             {/* over lay*/ }
             <div className='text-white absolute  bg-black/50 left-0 top-0 w-full h-full  rounded-xl'>
                 <p className='text-2xl font-bold px-2 pt-4'>Sun's Out,BOGO's Out</p>
                 <p className='px-2'> Through 8/26</p>
                 <button className='bg-orange-500 font-bold mx-2 absolute bottom-4'>Order Now</button>
             </div>
             <img className=' object-cover rounded-xl w-full max-h-[180px] md:max-h-[200px]' src="https://images.pexels.com/photos/2293537/pexels-photo-2293537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"   />

            
        </div>

        <div className='rounded-full relative mb-3'>
            
            {/* over lay*/ }
            <div className='text-white absolute  bg-black/50 left-0 top-0 w-full h-full  rounded-xl'>
                <p className='text-2xl font-bold px-2 pt-4'>New Restaurants</p>
                <p className='px-2'> Added Daily </p>
                <button className='bg-orange-500 font-bold mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className=' object-cover rounded-xl w-full max-h-[180px] md:max-h-[200px]' src="https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"   />

           
       </div>


       <div className='rounded-xl relative mb-3'>
            
            {/* over lay*/ }
            <div className='text-white absolute  bg-black/50 left-0 top-0 w-full h-full  rounded-xl '>
                <p className='text-2xl font-bold px-2 pt-4'>New Deliver Desserts Too </p>
                <p className='px-2'> Tasty Treats</p>
                <button className='bg-orange-500 font-bold mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className=' object-cover rounded-xl w-full max-h-[180px] md:max-h-[200px] ' src="https://images.pexels.com/photos/1579926/pexels-photo-1579926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"   />

           
       </div>
      

     </div>
   )
 }
 
 export default HeadLineCards