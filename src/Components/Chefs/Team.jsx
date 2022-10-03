import React from 'react';
import Title from '../Title';
import { motion, useInView } from "framer-motion"
import { useRef } from 'react';

const Team = () => {
    const title = {
        part1: "Our",
        part2: "Team"
    }
    const img = useRef(null)
    const texte = useRef(null)
    const isInView1 = useInView(texte, {once: true });
    const isInView2 = useInView(texte, {once: true });

    return (
        <div>
            <Title title={title} />
            <div className='flex lg:flex-row flex-col-reverse mt-4'>
                <motion.img 
                ref={img} 
                style={{
                    transform: isInView1 ? "none" : "translateX(-50px)",
                    opacity: isInView1 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                  }}
                className='lg:w-1/2 px-10 xl:px-24 py-4' src="/images/team.png" alt="" srcset="" />
                <div className='lg:w-1/2 flex justify-center items-center'>
                    <motion.p 
                    style={{
                        transform: isInView2 ? "none" : "translateX(50px)",
                        opacity: isInView2 ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                      }}
                    ref={texte} className='font-battam text-base md:text-xl lg:text-3xl px-10 text-justify font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie suscipit volutpat. Ut vitae malesuada nulla. Proin ullamcorper convallis tellus id elementum. Sed tristique odio nec rhoncus semper. Maecenas est dui, gravida et ultricies ut, molestie vel tortor. Maecenas est dui, gravida et ultricies ut, molestie vel tortor.</motion.p>
                </div>
            </div>
        </div>
    );
}
export default Team;