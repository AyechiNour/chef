import React from 'react'
import Title from '../Title'
import ScaleAnimation from '../../Animation/ScaleAnimation'

export default function Contact() {
  const title = {
    part1: "Our",
    part2: "Contact",
  }
  return (
    <div style={{ backgroundColor: "#F2F2F2" }} className="pb-16">
      <Title title={title} />
      <div className='grid grid-cols-1 md:grid-cols-2 mt-4'>
        <ScaleAnimation>
          <div className='order-2 md:order-1 flex justify-center items-center mt-4 md:mt-0'>
            <img className='w-2/3' src="/images/map.png" alt="" srcset="" />
          </div>
        </ScaleAnimation>
        <div className='order-1 md:order-2 flex flex-col justify-center items-center mt-10 md:mt-0'>
          <ScaleAnimation>
            <span className='font-battam text-lg md:text-2xl py-2'>We'd love to hear from you</span>
            <div>
              <div className='flex flex-row items-center py-2'>
                <img className='w-7 md:w-10 w-7 md:h-10' src="/images/localisation.png" alt="" srcset="" />
                <span className='font-battam text-lg md:text-2xl px-3'>Rue allée de la Garance</span>
              </div>
              <div className='flex flex-row items-center py-2'>
                <img className='w-7 md:w-10 w-7 md:h-10' src="/images/tel.png" alt="" srcset="" />
                <span className='font-battam text-lg md:text-2xl px-3'>+216 29 155 148</span>
              </div>
              <div className='flex flex-row items-center py-2'>
                <img className='w-7 md:w-10 w-7 md:h-10' src="/images/mail.png" alt="" srcset="" />
                <span className='font-battam text-lg md:text-2xl px-3'>email.email@gmail.com</span>
              </div>
            </div>
          </ScaleAnimation>
        </div>
      </div>

    </div>
  )
}
