import React from 'react';
import Title from './Title';

const Gallery = () => {
    const title = {
        part1: "Our",
        part2: "Gallery"
    }
    return (
        <div style={{ backgroundColor: "#F2F2F2" }} className='mt-5 pt-2'>
            <Title title={title} />
            <div className='grid grid-cols-3 grid-rows p-1 sm:p-3 md:p-4 xl:p-10'>
                <img className='row-span-2 col-span-1 p-1 md:p-2' src="/images/img1.png" alt="" srcset="" />
                <img className='row-span-1 col-span-1 p-1 md:p-2' src="/images/img2.png" alt="" srcset="" />
                <img className='row-span-1 col-span-1 p-1 md:p-2' src="/images/img3.png" alt="" srcset="" />
                <img className='row-span-1 col-span-1 p-1 md:p-2' src="/images/img4.png" alt="" srcset="" />
                <img className='row-span-2 col-span-1 p-1 md:p-2' src="/images/img5.png" alt="" srcset="" />
                <img className='row-span-1 col-span-2 p-1 md:p-2' src="/images/img6.png" alt="" srcset="" />
            </div>
        </div>
    );
}
export default Gallery;