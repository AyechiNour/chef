import React, { useEffect } from 'react'
import Header from '../Components/Header'
import BestOffer from '../Components/Menu/BestOffer'
import BestSeller from '../Components/Menu/BestSeller'
import Plats from '../Components/Menu/plats'
import { useTranslation } from "react-i18next";

export default function Menu() {
  const [t, i18n] = useTranslation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const headerInfo = {
    title: t('headerTitleMenu'),
    paragrah: t('headerParagraphMenu'),
    imgPath: "/images/HeaderImMenu.png"
  }
  return (
    <main>
      <Header headerInfo={headerInfo} />
      <BestSeller />
      <BestOffer />
      <Plats />
    </main>
  )
}