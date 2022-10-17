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
        <section>
            {apparence &&
                <div className='fixed z-50 overflow-hidden top-0 left-0 flex justify-center items-center w-screen h-screen' style={{ backgroundColor: "#000000d2" }}>
                    <img onClick={() => { setapparence(false); document.body.style.overflow = "visible" }} className='z-40 absolute right-7 top-7 w-10 h-10 cursor-pointer' src="/images/croix.png" alt="" srcset="" />
                    <div className='h-full w-full absolute top-0 left-0 bg-white z-30' style={{ backgroundColor: "#00000092" }}></div>
                    <img className='lg:h-4/5 z-30 relative top-6' src={img} alt="" srcset="" />
                </div>
            }
            <div style={{ backgroundColor: "#F2F2F2" }} className='mt-5 pt-2'>
                <Title title={title} />
                <div className='grid grid-cols-3 grid-rows p-1 sm:p-3 md:p-4 xl:p-10'>
                    <div className='cursor-pointer row-span-2 col-span-1 m-1 md:m-2 relative'>
                        <div onClick={() => { setapparence(true); setimg("/images/img1.png"); document.body.style.overflow = "hidden" }} className='w-full h-full absolute top-0 left-0 bg-red-200 z-30 flex justify-center items-center opacity-0 hover:opacity-100' style={{ backgroundColor: "#000000ab" }}>
                            <img src="/images/zoomer.png" alt="" srcset="" />
                        </div>
                        <img src="/images/img1.png" alt="" srcset="" />
                    </div>
                    <div className='cursor-pointer row-span-1 col-span-1 m-1 md:m-2 relative'>
                        <div onClick={() => { setapparence(true); setimg("/images/img2.png"); document.body.style.overflow = "hidden" }} className='w-full h-full absolute top-0 left-0 bg-red-200 z-30 flex justify-center items-center opacity-0 hover:opacity-100' style={{ backgroundColor: "#000000ab" }}>
                            <img src="/images/zoomer.png" alt="" srcset="" />
                        </div>
                        <img onClick={() => { setapparence(true); setimg("/images/img2.png"); document.body.style.overflow = "hidden" }} src="/images/img2.png" alt="" srcset="" />
                    </div>
                    <div className='cursor-pointer row-span-1 col-span-1 m-1 md:m-2 relative'>
                        <div onClick={() => { setapparence(true); setimg("/images/img3.png"); document.body.style.overflow = "hidden" }} className='w-full h-full absolute top-0 left-0 bg-red-200 z-30 flex justify-center items-center opacity-0 hover:opacity-100' style={{ backgroundColor: "#000000ab" }}>
                            <img src="/images/zoomer.png" alt="" srcset="" />
                        </div>
                        <img onClick={() => { setapparence(true); setimg("/images/img3.png"); document.body.style.overflow = "hidden" }} src="/images/img3.png" alt="" srcset="" />
                    </div>
                    <div className='cursor-pointer row-span-1 col-span-1 m-1 md:m-2 relative'>
                        <div onClick={() => { setapparence(true); setimg("/images/img4.png"); document.body.style.overflow = "hidden" }} className='w-full h-full absolute top-0 left-0 bg-red-200 z-30 flex justify-center items-center opacity-0 hover:opacity-100' style={{ backgroundColor: "#000000ab" }}>
                            <img src="/images/zoomer.png" alt="" srcset="" />
                        </div>
                        <img onClick={() => { setapparence(true); setimg("/images/img4.png"); document.body.style.overflow = "hidden" }} src="/images/img4.png" alt="" srcset="" />
                    </div>
                    <div className='cursor-pointer row-span-2 col-span-1 m-1 md:m-2 relative'>
                        <div onClick={() => { setapparence(true); setimg("/images/img5.png"); document.body.style.overflow = "hidden" }} className='w-full h-full absolute top-0 left-0 bg-red-200 z-30 flex justify-center items-center opacity-0 hover:opacity-100' style={{ backgroundColor: "#000000ab" }}>
                            <img src="/images/zoomer.png" alt="" srcset="" />
                        </div>
                        <img onClick={() => { setapparence(true); setimg("/images/img5.png"); document.body.style.overflow = "hidden" }} src="/images/img5.png" alt="" srcset="" />
                    </div>
                    <div className='cursor-pointer row-span-1 col-span-2 m-1 md:m-2 relative'>
                        <div onClick={() => { setapparence(true); setimg("/images/img6.png"); document.body.style.overflow = "hidden" }} className='w-full h-full absolute top-0 left-0 bg-red-200 z-30 flex justify-center items-center opacity-0 hover:opacity-100' style={{ backgroundColor: "#000000ab" }}>
                            <img src="/images/zoomer.png" alt="" srcset="" />
                        </div>
                        <img onClick={() => { setapparence(true); setimg("/images/img6.png"); document.body.style.overflow = "hidden" }} src="/images/img6.png" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Gallery;