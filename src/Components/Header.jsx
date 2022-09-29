import React from 'react'

export default function Header({ headerInfo }) {
  return (
    <div>
      <header className='lg:h-screen w-screen flex flex-col justify-center items-center relative'>
        <img className='absolute top-0 left-0 w-screen h-96 lg:h-full' src={headerInfo.imgPath} alt="" srcSet="" />
        <h1 className='font-caratere text-4xl sm:text-7xl lg:text-9xl z-10 text-slate-100 pb-3 pt-40 lg:pt-32'>{headerInfo.title}</h1>
        <p className='font-capriola md:w-3/5 text-center py-4 py-4 lg:py-8 z-10 text-white text-xs px-2 md:px-0 lg:text-base'>Un restaurant est un établissement de commerce où l'on sert des plats préparés et des boissons à consommer sur place, en échange d'un paiement.</p>
        <button className='font-capriola py-1 mb-20 sm:mb-12 md:mb-10 md:py-2 px-3 md:px-5 border-2 rounded-3xl	z-10 text-white text-xs lg:text-base'>see more</button>
      </header>
      <div id="end"></div>
    </div>
  )
}