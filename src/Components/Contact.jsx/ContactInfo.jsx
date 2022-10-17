import React from 'react';
import Title from '../Title';

const ContactInfo = () => {
    const title = {
        part1: "Contact",
        part2: "Us"
    }
    return (
        <div>
            <Title title={title} />
            <div className='flex flex-col lg:flex-row lg:divide-x-2 mt-4'>
                <div className='px-4 md:px-10 lg:w-1/2 lg:px-6 xl:px-16 pb-3'>
                    <h1 className='py-2 font-battam font-bold text-xl md:text-2xl'>Send a message</h1>
                    <p style={{ color: "#535353" }} className='font-battam font-medium text-xs md:text-sm pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac placerat dui. Vestibulum eu lacinia metus. Vivamus mollis faucibus gravida. </p>
                    <form action="">
                        <div className='flex flex-col md:flex-row'>
                            <div className='flex flex-col md:w-1/2 md:pr-2'>
                                <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">First Name</label>
                                <input className='border-b-2 border-black font-battam font-medium text-sm' type="text" />
                            </div>
                            <div className='flex flex-col md:w-1/2 md:pl-2 mt-8 md:mt-0'>
                                <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">Last Name</label>
                                <input className='border-b-2 border-black font-battam font-medium text-sm' type="text" />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row mt-8'>
                            <div className='flex flex-col md:w-1/2 md:pr-2'>
                                <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">Your Email</label>
                                <input className='border-b-2 border-black font-battam font-medium text-sm' type="text" />
                            </div>
                            <div className='flex flex-col md:w-1/2 md:pl-2 mt-8 md:mt-0'>
                                <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">Your Phone Number</label>
                                <input className='border-b-2 border-black font-battam font-medium text-sm' type="text" />
                            </div>
                        </div>
                        <div className='flex flex-col mt-8'>
                            <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">Subject</label>
                            <input className='border-b-2 border-black font-battam font-medium text-sm' type="text" />
                        </div>
                        <div className='flex flex-col mt-8'>
                            <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">Your Message</label>
                            <textarea maxlength="180" className='border-b-2 border-black font-battam font-medium text-sm' type="text" />
                        </div>
                        <div className='grid place-items-end'>
                            <input style={{ backgroundColor: "#151515" }} className='cursor-pointer font-capriola font-medium text-white text-xs my-3 py-2 px-5 rounded-full' type="button" value="Submit" />
                        </div>
                    </form>
                </div>
                <div className='px-4 md:px-10 lg:w-1/2 lg:px-6 xl:px-16 pb-3 grid grid-row-3'>
                    <div>
                        <h1 className='py-2 font-battam font-bold text-base md:text-xl'>Call Us</h1>
                        <p style={{ color: "#535353" }} className='font-battam font-medium text-xs md:text-sm pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac placerat dui. Vestibulum eu lacinia metus. </p>
                        <div className='flex flex-row items-center'>
                            <img src="/images/telephone.png" className='w-6 md:w-7 h-6 md:h-7' alt="" srcset="" />
                            <span className='font-battam font-semibold text-xs md:text-sm ml-2' style={{ color: "#F28705" }}>+216 29 147 905</span>
                        </div>
                    </div>
                    <div className='mt-4 lg:mt-0'>
                        <h1 className='py-2 font-battam font-bold text-base md:text-xl'>Visit Us</h1>
                        <p style={{ color: "#535353" }} className='font-battam font-medium text-xs md:text-sm pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac placerat dui. Vestibulum eu lacinia metus. </p>
                        <div className='flex flex-row items-center'>
                            <img src="/images/loca.png" className='w-6 md:w-7 h-6 md:h-7' alt="" srcset="" />
                            <span className='font-battam font-semibold text-xs md:text-sm ml-2' style={{ color: "#F28705" }}>Rue allée de la Garance</span>
                        </div>
                    </div>
                    <div className='mt-4 lg:mt-0'>
                        <h1 className='py-2 font-battam font-bold text-base md:text-xl'>Follow Us</h1>
                        <p style={{ color: "#535353" }} className='font-battam font-medium text-xs md:text-sm pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac placerat dui. Vestibulum eu lacinia metus. </p>
                        <div className='flex flex-row items-center'>
                            <img src="/images/fb.png" className='w-6 md:w-7 h-6 md:h-7 cursor-pointer' alt="" srcset="" />
                            <img src="/images/inst.png" className='w-7 md:w-8 h-7 md:h-8 mx-4 md:mx-6 cursor-pointer' alt="" srcset="" />
                            <img src="/images/twiter.png" className='w-6 md:w-7 h-6 md:h-7 cursor-pointer' alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactInfo;