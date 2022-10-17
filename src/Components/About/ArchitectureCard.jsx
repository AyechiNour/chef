import React from 'react';

const ArchitectureCard = ({ archi }) => {
    return (
        <div className='flex flex-col px-2 sm:px-4 h-40 sm:h-80 md:h-96 lg:px-32 xl:px-24'>
            <img className='h-32 sm:h-60 md:h-80' src={archi.imgPath} alt="" srcset="" />
            <h1 className='font-semibold p-2 font-comforta text-base lg:text-xl text-center' style={{ backgroundColor: "#151515", color: "#FFFFFF" }}>{archi.place}</h1>
        </div>
    );
}
export default ArchitectureCard;