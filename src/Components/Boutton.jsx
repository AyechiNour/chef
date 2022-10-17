import React from 'react'
import { motion } from "framer-motion"

export default function Boutton({ bgColor, textColor, flecheIm }) {
  return (
    <motion.div
      whileTap={{ scale: 0.8 }}
      className='relative'>
      <button style={{ backgroundColor: bgColor, color: textColor }} className='font-capriola rounded-3xl text-xs lg:text-sm pl-8 pr-20 py-2'>See More</button>
      <img className='absolute left-28 top-4 w-8' src={flecheIm} alt="" srcset="" />
    </motion.div>
  )
}