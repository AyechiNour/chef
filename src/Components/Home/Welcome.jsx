import React from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../Title'
import Option from './Option'

export default function Welcome() {
  const [t, i18n] = useTranslation()
  const title = {
    part1: t('welcome.part1'),
    part2: t('welcome.part2')
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
