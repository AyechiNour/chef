import React from 'react';

const PlatCard = () => {
    return (
        <div className='bg-white border-2 border-black w-60 flex flex-col justify-center items-center pb-2 mb-4'>
            <img src="/images/birria.png" alt="" />
            <span className='font-battam font-bold pt-2 text-lg'>Birria</span>
            <p style={{color:"#444444"}} className='text-center font-battam text-sm font-bold p-2'>beef, roast, leaves, lime, corriander, onion</p>
            <span style={{color:"#F28705"}} className='font-battam font-bold text-2xl'>25$</span>
        </div>
    );
}

export default PlatCard;