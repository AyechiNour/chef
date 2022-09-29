import React, { useEffect } from 'react'
import ContactInfo from '../Components/Contact.jsx/ContactInfo'
import Find from '../Components/Contact.jsx/Find'
import Header from '../Components/Header'

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])  
  const headerInfo={
    title:"Always On Call",
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
