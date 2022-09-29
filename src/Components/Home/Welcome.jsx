import React from 'react'
import Title from '../Title'
import Option from './Option'

export default function Welcome() {
  const title = {
    part1: "Welcome",
    part2: "Eating Well"
  }
  const info = [
    {
      icon: "/images/table.png",
      number: "35",
      option: "family tables"
    },
    {
      icon: "/images/plats.png",
      number: "125",
      option: "tasty recipes"
    },
    {
      icon: "/images/chef.png",
      number: "18",
      option: "team members"
    },
    {
      icon: "/images/guest.png",
      number: "3150",
      option: "satisfied guest"
    }
  ]
  const options = info.map((data) => {
    return (
      <Option Option={data} />
    )
  })
  return (
    <div>
      <Title title={title} />
      <div className='grid grid-cols-2 md:grid-cols-4 mb-8'>
        {options}
      </div>
    </div>
  )
}
