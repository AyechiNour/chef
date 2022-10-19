import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";

export default function Header({ headerInfo }) {
  const [t, i18n] = useTranslation()
  return (
    <header>
      <div className='lg:h-screen w-screen flex flex-col justify-center items-center relative'>
        <img className='absolute top-0 left-0 w-screen h-96 lg:h-full' src={headerInfo.imgPath} alt="" srcSet="" />
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className='font-caratere text-4xl sm:text-7xl lg:text-9xl z-10 text-slate-100 pb-3 pt-40 lg:pt-32'>{headerInfo.title}</motion.h1>
        <motion.p
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className='font-capriola md:w-3/5 text-center py-4 py-4 lg:py-8 z-10 text-white text-xs px-2 md:px-0 lg:text-base'>{headerInfo.paragrah}</motion.p>
        <motion.button
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{
            opacity: 0.9,
            transition: { duration: 0.01 }
          }}
          whileTap={{ scale: 0.9, transition: { duration: 0.001 }}}
          className='cursor-pointer font-capriola py-1 mb-20 sm:mb-12 md:mb-10 md:py-2 px-3 md:px-5 border-2 rounded-3xl z-10 text-white text-xs lg:text-base'>
          <HashLink smooth to="#plus">{t('headerButton')}</HashLink>
        </motion.button>
      </div>
      <span className='relative -top-10' id="plus"></span>
    </header>
  )
}