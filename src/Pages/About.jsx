import React, { useEffect } from 'react'
import Architecture from '../Components/About/Architecture'
import Offer from '../Components/About/Offer'
import Header from '../Components/Header'
import Story from '../Components/Story'
import Gallery from '../Components/Gallery'
import { useTranslation } from "react-i18next";

export default function About() {
  const [t, i18n] = useTranslation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const headerInfo = {
    title: t('headerTitleAbout'),
    paragrah: t('headerParagraphAbout'),
    imgPath: "/images/HeaderImAbout.png"
  }
  return (
    <main>
      <Header headerInfo={headerInfo} />
      <Offer />
      <Story />
      <Architecture />
      <Gallery />
    </main>
  )
}