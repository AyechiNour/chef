import React from 'react'

export default function Chef({ chef }) {
  return (
    <div className='py-8 flex flex-col justify-center items-center mx-2'>
      <img className='w-72' src={chef.imgpath} alt="" srcset="" />
      <h1 className='bg-yellow w-48 text-center py-7 font-battam font-bold text-xl relative bottom-8'>{chef.name}</h1>
    </div>
  )
}