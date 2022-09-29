import React, { useEffect } from 'react'
import Architecture from '../Components/About/Architecture'
import Offer from '../Components/About/Offer'
import Header from '../Components/Header'
import Story from '../Components/Story'
import Gallery from '../Components/Gallery'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])  
  const headerInfo={
    title:"Fast and Tasty",
    imgPath:"/images/HeaderImAbout.png"
  }
  return (
    <div>
      <Header headerInfo={headerInfo} />
      <Offer />
      <Story />
      <Architecture />
      <Gallery />
    </div>
  )
}
