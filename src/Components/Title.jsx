import React from 'react'

export default function Title({title}) {
  return (
    <div className='flex flex-row justify-center py-2 md:py-10 z-20'>
        <h2 className='mr-2 active font-bold text-xl md:text-4xl pb-1'>{title.part1}</h2>
        <h2 style={{color:title.color}} className='font-bold text-xl md:text-4xl ml-px'>{title.part2}</h2>
    </div>
  )
}
