import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Chefs from '../Components/Home/Chefs'
import Menu from '../Components/Home/Menu'
import Story from '../Components/Story'
import Welcome from '../Components/Home/Welcome'
import Contact from '../Components/Home/Contact'
import { useTranslation } from "react-i18next";

export default function Home() {
  const [t, i18n] = useTranslation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])  
  const headerInfo={
    title:t('headerTitleHome'),
    paragrah:t('headerParagraphHome'),
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
