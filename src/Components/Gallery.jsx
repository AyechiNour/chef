import React from 'react';
import { useState } from 'react';
import Title from './Title';

const Gallery = () => {
    const [apparence, setapparence] = useState(false);
    const title = {
        part1: "Our",
        part2: "Gallery"
    }
    const [img, setimg] = useState("");
    return (
        <div>
            {apparence &&
                <div className='fixed z-50 overflow-hidden top-0 left-0 flex justify-center items-center w-screen h-screen' style={{ backgroundColor: "#000000d2" }}>
                    <img onClick={() => { setapparence(false);document.body.style.overflow = "visible" }} className='z-40 absolute right-7 top-7 w-10 h-10 cursor-pointer' src="/images/croix.png" alt="" srcset="" />
                    <div className='h-full w-full absolute top-0 left-0 bg-white z-30' style={{ backgroundColor: "#00000092" }}></div>
                    <img className='lg:h-4/5 z-30 relative top-6' src={img} alt="" srcset="" />
                </div>
            }
            <div style={{ backgroundColor: "#F2F2F2" }} className='mt-5 pt-2'>
                <Title title={title} />
                <div className='grid grid-cols-3 grid-rows p-1 sm:p-3 md:p-4 xl:p-10'>
                    <img onClick={() => { setapparence(true);setimg("/images/img1.png");document.body.style.overflow = "hidden"}} className='cursor-pointer row-span-2 col-span-1 p-1 md:p-2' src="/images/img1.png" alt="" srcset="" />
                    <img onClick={() => { setapparence(true);setimg("/images/img2.png");document.body.style.overflow = "hidden"}} className='cursor-pointer row-span-1 col-span-1 p-1 md:p-2' src="/images/img2.png" alt="" srcset="" />
                    <img onClick={() => { setapparence(true);setimg("/images/img3.png");document.body.style.overflow = "hidden"}} className='cursor-pointer row-span-1 col-span-1 p-1 md:p-2' src="/images/img3.png" alt="" srcset="" />
                    <img onClick={() => { setapparence(true);setimg("/images/img4.png");document.body.style.overflow = "hidden"}} className='cursor-pointer row-span-1 col-span-1 p-1 md:p-2' src="/images/img4.png" alt="" srcset="" />
                    <img onClick={() => { setapparence(true);setimg("/images/img5.png");document.body.style.overflow = "hidden"}} className='cursor-pointer row-span-2 col-span-1 p-1 md:p-2' src="/images/img5.png" alt="" srcset="" />
                    <img onClick={() => { setapparence(true);setimg("/images/img6.png");document.body.style.overflow = "hidden"}} className='cursor-pointer row-span-1 col-span-2 p-1 md:p-2' src="/images/img6.png" alt="" srcset="" />
                </div>
            </div>
        </div>
    );
}
export default Gallery;