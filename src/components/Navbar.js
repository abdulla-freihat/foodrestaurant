

 import React from 'react'
    import {AiOutlineMenu, AiOutlineSearch , AiOutlineClose} from "react-icons/ai"
    import {BsFillCartFill , BsFillSaveFill } from "react-icons/bs"
    import {TbTruckDelivery} from "react-icons/tb"
    import {MdFavorite ,MdHelp } from "react-icons/md"
    import {FaWallet , FaUserFriends } from "react-icons/fa"
    import { useState } from 'react'
   

   
    import MobileMenu from './MobileMenu'
 const Navbar = () => {

    const [menu , setMenu] = useState(false);



    const openMenu = ()=>{
         setMenu(true);
    }


    const closeMenu = ()=>{
        setMenu(false);
   }
   return (
     <div className='max-w-[1640px] mx-auto flex justify-between items-center  p-4 '>

           <div className='flex items-center'>
           <div className='cursor-pointer'>
             <AiOutlineMenu onClick={openMenu}  size={30}/>
           </div>
           <h1 className='text-2xl sm:text-3xl px-3'>
              Best
              <span className='text-orange-500 font-bold'> Eats</span>
           </h1>

           <div className='hidden  lg:flex items-center p-1 bg-gray-200 rounded-full'>
             <p className='bg-orange-500 rounded-full text-white p-1 px-3 font-bold  '>Delivery</p>
             <p  className='font-bold px-3'>Pickup</p>
           </div>
           </div>
           {/* search input */}

           <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[300px] lg:w-[500px]' >
            <AiOutlineSearch size={25} />
            <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Search foods' />
           </div>

           {/* cart button*/ }
           <button className='bg-orange-500 rounded-full text-white font-bold hidden md:flex md:items-center py-2 '>
             <BsFillCartFill className='mr-2' size={25} /> Cart
             
           </button>

           {/* mobile menu */}

           {menu && <MobileMenu />}

          
           
           <div className={menu ? 'fixed top-0 left-0 bg-white w-[250px] h-screen z-20 duration-300' :'fixed top-0 left-[-100%] bg-white w-[250px] h-screen z-20 duration-300' }>
           <AiOutlineClose onClick={closeMenu}  className='absolute  right-4 top-4 cursor-pointer' size={25} />
           <h2 className='text-2xl absolute left-4 top-4'>Best<span className='text-[orange] font-bold'>Eats</span></h2>
            
            <ul className='p-4 flex flex-col text-gray-800 mt-12'>
                 <li className='flex items-center text-sm py-4 '><TbTruckDelivery className='mr-4' size={20} /> Orders</li>
                 <li className='flex items-center text-sm py-4 '><MdFavorite className='mr-4' size={20} /> Favorites</li>
                 <li className='flex items-center text-sm py-4 '><FaWallet className='mr-4' size={20} /> Wallet</li>
                 <li className='flex items-center text-sm py-4 '><MdHelp className='mr-4' size={20} /> Help</li>
                 <li className='flex items-center text-sm py-4 '><BsFillSaveFill className='mr-4' size={20} /> Best One</li>
                 <li className='flex items-center text-sm py-4 '><FaUserFriends className='mr-4' size={20} /> Invite Friends</li>
            </ul>
           </div>
          
           
     </div>
   )
 }
 
 export default Navbar