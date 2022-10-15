import React, { useState } from 'react'
import Title from '../Title';
import { useDispatch } from 'react-redux'
import { setbool } from '../../Features/bookingSlice';

export default function BookTable() {
    const title = {
        part1: "Book",
        part2: "A Table"
    }
    const dispatch = useDispatch()
    const [animation, setanimation] = useState(true);

    return (
        <div className={animation?'animation overflow-hidden fixed top-0 left-0 w-screen h-screen bg-white z-50 pt-10':'fixed overflow-hidden top-0 left-0 w-screen h-screen bg-white z-50 pt-10 animate'}>
            <svg className='absolute z-10 -top-24' width={window.screen.width} height={window.screen.height*1.25} viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_452_14)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1184.58 10.5661C1281.27 13.3652 1393.13 16.3443 1425.65 88.9312C1461.68 169.343 1403.42 254.518 1318.5 309.493C1215.21 376.363 1081.77 437.384 973.101 381.903C848.453 318.264 790.97 183.225 854.094 72.3851C906.444 -19.5387 1060.63 6.97791 1184.58 10.5661Z" fill="#FFC988" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M341.514 799.301C438.204 802.101 550.066 805.08 582.587 877.667C618.614 958.078 560.359 1043.25 475.441 1098.23C372.146 1165.1 238.704 1226.12 130.037 1170.64C5.38899 1107 -52.094 971.96 11.0295 861.121C63.3803 769.197 217.567 795.713 341.514 799.301Z" fill="#FFC988" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M913.509 1850.15C1010.2 1852.95 942.99 1910.79 975.511 1983.38C1011.54 2063.79 1132.35 2094.1 1047.44 2149.08C944.141 2215.95 810.7 2276.97 702.032 2221.49C577.384 2157.85 740.444 2138.99 803.567 2028.15C855.918 1936.23 789.563 1846.56 913.509 1850.15Z" fill="#FFC988" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M544.729 2837.24C739.254 2842.87 544.595 2916.06 577.116 2988.64C613.142 3069.06 763.575 3081.19 678.656 3136.17C575.361 3203.04 441.919 3264.06 333.252 3208.58C208.604 3144.94 371.663 3126.08 434.787 3015.24C487.137 2923.32 420.783 2833.65 544.729 2837.24Z" fill="#FFC988" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M309.714 3651.63C504.239 3657.26 309.579 3730.45 342.1 3803.04C378.127 3883.45 528.559 3895.58 443.64 3950.56C340.346 4017.43 206.904 4078.45 98.2365 4022.97C-26.4112 3959.33 -115.514 3696.59 -52.3908 3585.75C-0.0400307 3493.83 185.767 3648.04 309.714 3651.63Z" fill="#FFC988" />
                </g>
                <defs>
                    <filter id="filter0_f_452_14" x="-473.21" y="-395.708" width="2309.71" height="4840.32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_452_14" />
                    </filter>
                </defs>
            </svg>
            <img onClick={() => { setanimation(!animation);setTimeout(() => {dispatch(setbool())},950);}}
                className='z-50 absolute w-6 md:w-10 h-6 md:h-10 right-6 md:right-16 top-6 md:top-10 cursor-pointer' src="/images/CroixBooking.png" alt="" srcset="" />
            <Title title={title} />
            <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-8 md:grid-rows-4 z-50'>
                <div className='flex flex-col mt-8 px-4 lg:px-16 xl:px-24 z-50'>
                    <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">First Name</label>
                    <input className='bg-inherit border-b-2 border-black font-battam font-medium text-sm' type="text" />
                </div>
                <div className='flex flex-col mt-8 px-4 lg:px-16 xl:px-24 z-50'>
                    <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">Last Name</label>
                    <input className='bg-inherit border-b-2 border-black font-battam font-medium text-sm' type="text" />
                </div>
                <div className='flex flex-col mt-8 px-4 lg:px-16 xl:px-24 z-50'>
                    <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">Your Email</label>
                    <input className='bg-inherit border-b-2 border-black font-battam font-medium text-sm' type="Email" />
                </div>
                <div className='flex flex-col mt-8 px-4 lg:px-16 xl:px-24 z-50'>
                    <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">Your Phone Number</label>
                    <input className='bg-inherit border-b-2 border-black font-battam font-medium text-sm' type="tel" />
                </div>
                <div className='flex flex-col mt-8 px-4 lg:px-16 xl:px-24 z-50'>
                    <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">Date</label>
                    <input className='bg-inherit border-b-2 border-black font-battam font-medium text-sm' type="date" />
                </div>
                <div className='flex flex-col mt-8 px-4 lg:px-16 xl:px-24 z-50'>
                    <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">Time</label>
                    <input className='bg-inherit border-b-2 border-black font-battam font-medium text-sm' type="time" />
                </div>
                <div className='flex flex-col mt-8 px-4 lg:px-16 xl:px-24 z-50'>
                    <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">Number of persons</label>
                    <input className='bg-inherit border-b-2 border-black font-battam font-medium text-sm' type="number" />
                </div>
                <div className='flex flex-col mt-8 px-4 lg:px-16 xl:px-24 z-50'>
                    <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">Number of tables</label>
                    <input className='bg-inherit border-b-2 border-black font-battam font-medium text-sm' type="number" />
                </div>
            </div>
            <div className='grid place-items-end z-50 cursor-pointer'>
                <input style={{ backgroundColor: "#151515" }} className='z-50 cursor-pointer font-capriola font-medium text-white text-xs my-3 py-2 px-5 rounded-full mx-24 mt-10' type="button" value="Book Now" />
            </div>
        </div>
    )
}