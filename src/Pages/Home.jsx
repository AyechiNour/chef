import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Chefs from '../Components/Home/Chefs'
import Menu from '../Components/Home/Menu'
import Story from '../Components/Story'
import Welcome from '../Components/Home/Welcome'
import Contact from '../Components/Home/Contact'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])  
  const headerInfo={
    title:"Fast and Tasty",
    imgPath:"/images/HeaderImHome.png"
  }
  return (
    <div className='overflow-x-hidden'>
      <Header headerInfo={headerInfo} />
      <Welcome />
      <Story />
      <Chefs />
      <Menu />
      <Contact />
    </div>
  )
}
