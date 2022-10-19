import React from 'react'
import { useTranslation } from 'react-i18next'
import Title from './Title'

export default function Story() {
  const [t] = useTranslation()
  const title = {
    part1: t('story.part1'),
    part2: t('story.part2')
  }
  return (
    <section className='flex flex-col-reverse lg:flex-row bg-slate-100'>
      <img className='lg:w-2/5' src="/images/stIm.jpg" alt="" />
      <div className='lg:w-3/5 bg-slate-100 flex flex-col items-center justify-center'>
        <Title title={title} />
        <p className='font-battam font-semibold text-sm sm:text-lg p-5 lg:px-10 text-justify xl:leading-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie suscipit volutpat. Ut vitae malesuada nulla. Proin ullamcorper convallis tellus id elementum. Sed tristique odio nec rhoncus semper. Maecenas est dui, gravida et ultricies ut, molestie vel tortor. Fusce orci lacus, vulputate in odio in, gravida maximus sem. Fusce efficitur elementum nunc quis congue. Ut vehicula vehicula nisi imperdiet commodo. Mauris et nulla nec justo mollis vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </section>
  )
}