import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"

export default function Navbar() {
  const [coord, setcoord] = useState(0);
  function handleScroll(e) {
    setcoord(window.scrollY)
  }
  window.addEventListener('scroll', handleScroll);
  const [drap, setdrap] = useState("images/frFlag.png")
  const [lang, setlang] = useState(false);
  return (
    <nav className='bg-white fixed w-screen z-50 drop-shadow-md border-b-2 border-neutral-100'>
      {(coord < 50) &&
        <div className='px-2 md:px-16'>
          <motion.div 
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className='flex flex-row items-center place-content-between py-1'>
            <div className="flex flex-row items-center">
              <img className='w-10 h-10 md:w-14 md:h-14' src="images/logo.png" alt="" srcset="" />
              <h1 className='px-2 font-jim text-lg sm:text-2xl font-normal'>The Chef</h1>
            </div>
            <div className='flex flex-row items-center relative'>
              <h1 className='uppercase bg-orange py-2 w-24 sm:w-32 text-center rounded-xl text-white font-bold text-xs md:text-sm cursor-pointer'>book a table</h1>
              <div>
                <img onClick={() => { setlang(!lang) }} className='w-7 ml-3 cursor-pointer' src={drap} alt="" srcset="" />
                {lang &&
                  <div className='absolute top-10 -right-3 bg-white border-2 border-black'>
                    <div onClick={() => { setlang(!lang); setdrap("images/frFlag.png") }} className='grid grid-cols-2 items-center border-b-2 border-black p-1 hover:bg-slate-100 cursor-pointer'>
                      <span className='text-sm font-semibold pl-1'>FR</span>
                      <img className='w-6 cursor-pointer mr-2' src="images/frFlag.png" alt="" srcset="" />
                    </div>
                    <div onClick={() => { setlang(!lang); setdrap("images/enFlag.png") }} className='grid grid-cols-2 items-center p-1 hover:bg-slate-100 cursor-pointer'>
                      <span className='text-sm font-semibold pl-1'>EN</span>
                      <img className='w-6 cursor-pointer mr-2' src="images/enFlag.png" alt="" srcset="" />
                    </div>
                  </div>
                }
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2 }}
            className='bg-black h-0.5 px-2 md:x-16'></motion.div>
        </div>
      }
      <motion.div
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className='flex flex-row px-16 place-content-around pb-2'>
        <NavLink className='font-hind pt-2 px-1 mx-2' activeClassName='active' end to="/">Home</NavLink>
        <NavLink className='font-hind pt-2 px-1 mx-2' activeClassName='active' to="/About">About</NavLink>
        <NavLink className='font-hind pt-2 px-1 mx-2' activeClassName='active' to="/Chefs">Chefs</NavLink>
        <NavLink className='font-hind pt-2 px-1 mx-2' activeClassName='active' to="/Menu">Menu</NavLink>
        <NavLink className='font-hind pt-2 px-1 mx-2' activeClassName='active' to="/Contact">Contact</NavLink>
      </motion.div>
    </nav>
  )
}