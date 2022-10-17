import React from 'react';
import Title from '../Title';
import { motion, useInView } from "framer-motion"
import { useRef } from 'react';

const BestOffer = () => {
    const title = {
        part1: "Our",
        part2: "Offer",
        color: "#FFFFFF"
    }
    const offre = useRef(null)
    const img = useRef(null)
    const isInView1 = useInView(offre, { once: true });
    const isInView2 = useInView(img, { once: true });
    return (
        <div className='bg-offer'>
            <Title title={title} />
            <div className='flex flex-col sm:flex-row'>
                <motion.div
                    ref={offre}
                    style={{
                        transform: isInView1 ? "none" : "translateX(-100px)",
                        opacity: isInView1 ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                    className='sm:w-1/2 text-white text-xl sm:text-2xl md:text-3xl xl:text-6xl flex flex-col justify-center items-center mt-5 sm:mt-0'>
                    <span className='font-semibold'>Today’s Special</span>
                    <div className='flex flex-row my-3 xl:my-8'>
                        <span className='font-bold uppercase mr-4' style={{ color: "#F28705" }}>SURPRISE</span>
                        <span className='font-semibold'>for you</span>
                    </div>
                    <div className='flex flex-row'>
                        <span className='font-semibold'>Buy 1 Get 1</span>
                        <span className='font-bold uppercase ml-4' style={{ color: "#F28705" }}>FREE</span>
                    </div>
                    <span className='font-bold uppercase ml-4 mt-3 xl:mt-8' style={{ color: "#F28705" }}>45 $</span>
                </motion.div>
                <motion.img
                    ref={img}
                    style={{
                        transform: isInView1 ? "none" : "translateX(100px)",
                        opacity: isInView1 ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                    className='px-16 sm:px-6 md:px-10 xl:px-24 py-10 sm:w-1/2' src="/images/Humburger.png" alt="" srcset="" />
            </div>
        </div>
    );
}
export default BestOffer;