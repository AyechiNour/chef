import React from 'react'
import { motion ,useInView } from "framer-motion"
import { useRef } from 'react'

export default function Footer() {
  const footer = useRef(null)
  const isInView = useInView(footer, { once: true });

  return (
    <footer className='flex flex-col pt-5'>
      <motion.div
        ref={footer}
        style={{
          transform: isInView ? "none" : "translateY(-50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        className='grid grid-cols-1 md:grid-cols-3 justify-center'>
        <div className='flex flex-col justify-center items-center'>
          <img className='w-32 h-32' src="/images/logoFooter.png" alt="" srcset="" />
          <span className='px-2 font-jim text-xl sm:text-2xl lg:text-3xl font-normal'>The Chef</span>
        </div>
        <div className='flex flex-col justify-center items-center relative top-5 mb-8'>
          <h1 className='uppercase bg-orange py-2 w-24 sm:w-32 text-center rounded-xl text-white font-bold text-xs md:text-sm cursor-pointer'>book a table</h1>
          <span className='font-battam text-base sm:text-xl lg:text-2xl px-3 py-2'>Open seven days a week</span>
        </div>
        <div className='flex flex-col-reverse md:flex-col justify-center items-center'>
          <span className='font-battam text-base sm:text-xl lg:text-2xl px-3 py-2'>Stay Connected</span>
          <div className='flex flex-row'>
            <img className='w-10 h-10 cursor-pointer' src="/images/facebook.png" alt="" srcset="" />
            <img className='w-10 h-10 cursor-pointer' src="/images/insta.png" alt="" srcset="" />
            <img className='w-10 h-10 cursor-pointer' src="/images/twitter.png" alt="" srcset="" />
          </div>
        </div>
      </motion.div>
      <div style={{ backgroundColor: "#151515" }} className='py-1 flex justify-center text-sm md:text-base'>
        <span className='text-white font-semibold'>Copyright © , All rights reserved </span>
      </div>
      <div className='bg-orange flex flex-row justify-center py-1'>
        <span className='font-medium text-sm md:text-base mr-1'>Powered By: </span>
        <span className='font-bold text-sm md:text-base'> Ayechi Nour</span>
      </div>
    </footer>
  )
}
