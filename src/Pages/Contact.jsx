import React, { useEffect } from 'react'
import ContactInfo from '../Components/Contact.jsx/ContactInfo'
import Find from '../Components/Contact.jsx/Find'
import Header from '../Components/Header'
import { useTranslation } from "react-i18next";

export default function Contact() {
  const [t, i18n] = useTranslation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])  
  const headerInfo={
    title:t('headerTitleContact'),
    paragrah:t('headerParagraphContact'),
    imgPath:"/images/HeaderImContact.png"
  }
  return (
    <div>
      <Header headerInfo={headerInfo} />
      <ContactInfo />
      <Find />
    </div>
  )
}
