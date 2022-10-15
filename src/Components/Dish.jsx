import React from 'react'

export default function Dish({dish,bgColor,textColor}) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <img className='w-64 h-72' src={dish.imgPath} alt="" srcset="" />
        <div style={{backgroundColor:bgColor,color:textColor}} className="w-64 flex flex-col justify-center items-center p-5">
            <h1 className='font-comforta font-bold mb-1'>{dish.name}</h1>
            <h2 className='font-battam font-bold'>{dish.price} $</h2>
        </div>
    </div>
  )
}