import React, { useEffect } from 'react'
import Header from '../Components/Header'
import BestOffer from '../Components/Menu/BestOffer'
import BestSeller from '../Components/Menu/BestSeller'
import Plats from '../Components/Menu/plats'

export default function Menu() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const headerInfo = {
    title: "Delicious and Healthy",
    imgPath: "/images/HeaderImMenu.png"
  }
  return (
    <div>
      <Header headerInfo={headerInfo} />
      <BestSeller />
      <BestOffer />
      <Plats />
    </div>
  )
}
