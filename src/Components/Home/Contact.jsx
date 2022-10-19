import React from 'react'
import Title from '../Title'
import ScaleAnimation from '../../Animation/ScaleAnimation'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const [t] = useTranslation()
  const title = {
    part1: t('contact.part1'),
    part2: t('contact.part2'),
  }
  return (
    <div style={{ backgroundColor: "#F2F2F2" }} className="pb-16">
      <Title title={title} />
      <div className='grid grid-cols-1 md:grid-cols-2 mt-4'>
        <ScaleAnimation>
          <div className='order-2 md:order-1 flex justify-center items-center mt-4 md:mt-0'>
            <img className='w-2/3' src="/images/map.png" alt="" srcSet="" />
          </div>
        </ScaleAnimation>
        <div className='order-1 md:order-2 flex flex-col justify-center items-center mt-10 md:mt-0'>
          <ScaleAnimation>
            <span className='font-battam font-bold text-sm md:text-base py-2'>We'd love to hear from you</span>
            <div>
              <div className='flex flex-row items-center py-2'>
                <img className='w-5 md:w-8 w-5 md:h-8' src="/images/localisation.png" alt="" srcSet="" />
                <span className='font-battam font-bold text-sm md:text-base px-3'>Garance Alley Street</span>
              </div>
              <div className='flex flex-row items-center py-2'>
                <img className='w-5 md:w-8 w-5 md:h-8' src="/images/tel.png" alt="" srcSet="" />
                <span className='font-battam font-bold text-sm md:text-base px-3'>+216 29 155 148</span>
              </div>
              <div className='flex flex-row items-center py-2'>
                <img className='w-5 md:w-8 w-5 md:h-8' src="/images/mail.png" alt="" srcSet="" />
                <span className='font-battam font-bold text-sm md:text-base px-3'>email.email@gmail.com</span>
              </div>
            </div>
          </ScaleAnimation>
        </div>
      </div>
    </div>
  )
}
