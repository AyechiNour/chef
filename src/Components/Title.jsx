import React from 'react'
import { motion, useInView } from "framer-motion"
import { useRef } from 'react'

export default function Title({ title }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      className='flex flex-row justify-center py-2 md:py-10 z-20'>
      <h2 className='mr-2 active font-bold text-xl md:text-4xl pb-1'>{title.part1}</h2>
      <h2 style={{ color: title.color }} className='font-bold text-xl md:text-4xl ml-px'>{title.part2}</h2>
    </motion.div>
  )
}