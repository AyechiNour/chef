import React from 'react';
import ScaleAnimation from '../../Animation/ScaleAnimation';

const OfferCard = ({ offer }) => {
    return (
        <ScaleAnimation>
            <div className='flex flex-col justify-center items-center pb-10'>
                <img className='w-12 lg:w-24 h-12 lg:h-24' src={offer.imgPath} alt="" srcset="" />
                <h1 className='font-battam text-lg lg:text-2xl font-bold p-2 lg:p-6'>{offer.offer}</h1>
                <span className='font-battam text-sm lg:text-lg font-semibold px-16 sm:px-4 lg:px-16 xl:px-32 text-center' style={{ color: "#5A5A5A" }}>{offer.description}</span>
            </div>
        </ScaleAnimation>
    );
}
export default OfferCard;