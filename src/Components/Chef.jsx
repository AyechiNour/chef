import React from 'react'

export default function Chef({ chef,id }) {
  return (
    <div key={id} className='py-8 flex flex-col justify-center items-center mx-2'>
      <img className='w-72' src={chef.imgpath} alt="" srcSet="" />
      <h1 className='bg-yellow w-48 text-center py-7 font-battam font-bold text-xl relative bottom-8'>{chef.name}</h1>
    </div>
  )
}