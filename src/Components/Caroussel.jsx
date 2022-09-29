import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Caroussel({items,leftBouttom,rightBouttom,responsive}) {
    const handleDragStart = (e) => e.preventDefault();
    const bool=true
    return (
        <AliceCarousel animationDuration="600" autoPlayInterval="1000" disableDotsControls={bool} autoPlay={bool} infinite={bool} responsive={responsive} mouseTracking items={items} renderPrevButton={()=>{return(leftBouttom)}} renderNextButton={()=>{return(rightBouttom)}} />
    )
}