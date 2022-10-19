import React, { useEffect } from 'react'
import ContactInfo from '../Components/Contact/ContactInfo'
import Find from '../Components/Contact/Find'
import Header from '../Components/Header'
import { useTranslation } from "react-i18next";

export default function Contact() {
  const [t] = useTranslation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const headerInfo = {
    title: t('headerTitleContact'),
    paragrah: t('headerParagraphContact'),
    imgPath: "/images/HeaderImContact.png"
  }
  return (
    <main>
      <Header headerInfo={headerInfo} />
      <ContactInfo />
      <Find /> 
    </main>
  )
}