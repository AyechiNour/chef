import React, { useEffect } from 'react'
import Cheff from '../Components/Chefs/Cheff'
import Team from '../Components/Chefs/Team'
import Gallery from '../Components/Gallery'
import Header from '../Components/Header'
import { useTranslation } from "react-i18next";

export default function Chefs() {
  const [t, i18n] = useTranslation()
  useEffect
  (() => {
    window.scrollTo(0, 0)
  }, [])  
  const headerInfo = {
    title:t('headerTitleChef'),
    paragrah:t('headerParagraphChef'),
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
