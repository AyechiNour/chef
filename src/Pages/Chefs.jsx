import React, { useEffect } from 'react'
import Cheff from '../Components/Chefs/Cheff'
import Team from '../Components/Chefs/Team'
import Gallery from '../Components/Gallery'
import Header from '../Components/Header'

export default function Chefs() {
  useEffect
  (() => {
    window.scrollTo(0, 0)
  }, [])  
  const headerInfo = {
    title: "Creative and Hardworking",
    imgPath: "/images/HeaderImChefs.png"
  }
  return (
    <div>
      <Header headerInfo={headerInfo} />
      <Team />
      <Cheff />
      <Gallery />
    </div>
  )
}
