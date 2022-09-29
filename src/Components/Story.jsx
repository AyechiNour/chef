import React from 'react'
import Title from './Title'

export default function Story() {
    const title = {
        part1: "Our",
        part2: "Story"
      }
  return (
    <div className='flex flex-col-reverse lg:flex-row'>
        <img className='lg:w-2/5' src="/images/StoryImage.png" alt="" />
        <div className='lg:w-3/5 bg-slate-100 flex flex-col items-center justify-center'>
            <Title title={title} />
            <p className='font-battam font-bold text-xl p-5 lg:p-12 leading-10 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie suscipit volutpat. Ut vitae malesuada nulla. Proin ullamcorper convallis tellus id elementum. Sed tristique odio nec rhoncus semper. Maecenas est dui, gravida et ultricies ut, molestie vel tortor. Fusce orci lacus, vulputate in odio in, gravida maximus sem. Fusce efficitur elementum nunc quis congue. Ut vehicula vehicula nisi imperdiet commodo. Mauris et nulla nec justo mollis vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie suscipit volutpat. Ut vitae malesuada nulla. Proin ullamcorper convallis tellus id elementum. Sed tristique odio nec rhoncus semper. Maecenas est dui, gravida et ultricies ut, molestie vel tortor. Fusce orci lacus, vulputate in odio in, gravida maximus sem. Fusce efficitur elementum nunc quis congue. Ut vehicula vehicula nisi imperdiet commodo. Mauris et nulla nec justo mollis vehicula.</p>
        </div>
    </div>
  )
}
