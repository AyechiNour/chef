import React from 'react'

export default function Boutton({bgColor,textColor,flecheIm}) {
  return (
    <div className='relative'>
        <button style={{backgroundColor:bgColor,color:textColor}} className='font-capriola rounded-3xl text-xs lg:text-sm pl-8 pr-20 py-2'>See More</button>
        <img className='absolute left-28 top-4 w-8' src={flecheIm} alt="" srcset="" />
    </div>
  )
}
