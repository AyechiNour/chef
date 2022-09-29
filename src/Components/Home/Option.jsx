import React from 'react'

export default function Option({Option}) {
    return (
    <div className='flex flex-col justify-center items-center my-4'>
        <img className='md:w-20 w-16 md:h-20 h-16' src={Option.icon} alt="" />
        <span className='font-bold text-2xl sm:text-3xl my-2 font-battam'>{Option.number}</span>
        <h1 className='font-bold text-base sm:text-lg text-gray-600 font-battam'>{Option.option}</h1>
    </div>
  )
}