import React from 'react';

const PlatCard = ({ plat }) => {
    return (
        <div className='bg-white border-2 border-black w-60 flex flex-col justify-center items-center pb-2 mb-4'>
            <img className='w-60 h-72' src={plat.imgPath} alt="" />
            <h2 className='font-battam font-bold pt-2 text-lg'>{plat.name}</h2>
            <p style={{ color: "#444444" }} className='text-center font-battam text-sm font-bold p-2'>{plat.description}</p>
            <span style={{ color: "#F28705" }} className='font-battam font-bold text-2xl'>{plat.price}$</span>
        </div>
    );
}
export default PlatCard;