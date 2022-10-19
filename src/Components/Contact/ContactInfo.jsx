import React from 'react';
import Title from '../Title';
import _ from 'lodash';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactInfo = () => {
    const [t] = useTranslation()
    const title = {
        part1: t('contactUs.part1'),
        part2: t('contactUs.part2')
    }
    const [formData, updateFormData] = useState({});
    const [formErrors, updateFormErrors] = useState({});
    function handleSubmit(e) {
        e.preventDefault();
        let errors = {}
        if (_.isEmpty(formData.firstName)) { errors = { ...errors, firstName: "This field is required" } }
        if (_.isEmpty(formData.lastName)) { errors = { ...errors, lastName: "This field is required" } }
        if (_.isEmpty(formData.email)) { errors = { ...errors, email: "This field is required" } }
        if (_.isEmpty(formData.phone)) { errors = { ...errors, phone: "This field is required" } }
        if (_.isEmpty(formData.subject)) { errors = { ...errors, subject: "This field is required" } }
        if (_.isEmpty(formData.message)) { errors = { ...errors, message: "This field is required" } }
        
        updateFormErrors(errors);
        if (!_.isEmpty(formErrors)) return;
    }
    function handleChange(e) {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const displayError = (key) => {
        if (!_.isEmpty(formErrors[key])) return <div className="pt-1 text-red-500 font-semibold">{formErrors[key]}</div>
    }
    return (
        <div>
            <Title title={title} />
            <div className='flex flex-col lg:flex-row lg:divide-x-2 mt-4'>
                <div className='px-4 md:px-10 lg:w-1/2 lg:px-6 xl:px-16 pb-3'>
                    <h1 className='py-2 font-battam font-bold text-xl md:text-2xl'>Send a message</h1>
                    <p style={{ color: "#535353" }} className='font-battam font-medium text-xs md:text-sm pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac placerat dui. Vestibulum eu lacinia metus. Vivamus mollis faucibus gravida. </p>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col md:flex-row'>
                            <div className='flex flex-col md:w-1/2 md:pr-2'>
                                <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">First Name</label>
                                <input name="firstName" onBlur={handleChange} className='border-b-2 border-black font-battam font-medium text-sm' type="text" />
                                {displayError("firstName")}
                            </div>
                            <div className='flex flex-col md:w-1/2 md:pl-2 mt-8 md:mt-0'>
                                <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">Last Name</label>
                                <input name="lastName" onBlur={handleChange} className='border-b-2 border-black font-battam font-medium text-sm' type="text" />
                                {displayError("lastName")}
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row mt-8'>
                            <div className='flex flex-col md:w-1/2 md:pr-2'>
                                <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">Your Email</label>
                                <input name="email" onBlur={handleChange} className='border-b-2 border-black font-battam font-medium text-sm' type="text" />
                                {displayError("email")}
                            </div>
                            <div className='flex flex-col md:w-1/2 md:pl-2 mt-8 md:mt-0'>
                                <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">Your Phone Number</label>
                                <input name="phone" onBlur={handleChange} className='border-b-2 border-black font-battam font-medium text-sm' type="text" />
                                {displayError("phone")}
                            </div>
                        </div>
                        <div className='flex flex-col mt-8'>
                            <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">Subject</label>
                            <input name="subject" onBlur={handleChange} className='border-b-2 border-black font-battam font-medium text-sm' type="text" />
                            {displayError("subject")}
                        </div>
                        <div className='flex flex-col mt-8'>
                            <label className='py-2 font-battam font-bold text-sm md:text-base' htmlFor="">Your Message</label>
                            <textarea name="message" onBlur={handleChange} maxlength="180" className='border-b-2 border-black font-battam font-medium text-sm' type="text" />
                            {displayError("message")}
                        </div>
                        <div className='grid place-items-end'>
                            <input style={{ backgroundColor: "#151515" }} className='cursor-pointer font-capriola font-medium text-white text-xs my-3 py-2 px-5 rounded-full' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
                <div className='px-4 md:px-10 lg:w-1/2 lg:px-6 xl:px-16 pb-3 grid grid-row-3'>
                    <div>
                        <h1 className='py-2 font-battam font-bold text-base md:text-xl'>Call Us</h1>
                        <p style={{ color: "#535353" }} className='font-battam font-medium text-xs md:text-sm pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac placerat dui. Vestibulum eu lacinia metus. </p>
                        <div className='flex flex-row items-center'>
                            <img src="/images/telephone.png" className='w-6 md:w-7 h-6 md:h-7' alt="" srcSet="" />
                            <span className='font-battam font-semibold text-xs md:text-sm ml-2' style={{ color: "#F28705" }}>+216 29 147 905</span>
                        </div>
                    </div>
                    <div className='mt-4 lg:mt-0'>
                        <h1 className='py-2 font-battam font-bold text-base md:text-xl'>Visit Us</h1>
                        <p style={{ color: "#535353" }} className='font-battam font-medium text-xs md:text-sm pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac placerat dui. Vestibulum eu lacinia metus. </p>
                        <div className='flex flex-row items-center'>
                            <img src="/images/loca.png" className='w-6 md:w-7 h-6 md:h-7' alt="" srcSet="" />
                            <span className='font-battam font-semibold text-xs md:text-sm ml-2' style={{ color: "#F28705" }}>Rue allée de la Garance</span>
                        </div>
                    </div>
                    <div className='mt-4 lg:mt-0'>
                        <h1 className='py-2 font-battam font-bold text-base md:text-xl'>Follow Us</h1>
                        <p style={{ color: "#535353" }} className='font-battam font-medium text-xs md:text-sm pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac placerat dui. Vestibulum eu lacinia metus. </p>
                        <div className='flex flex-row items-center'>
                            <img src="/images/fb.png" className='w-6 md:w-7 h-6 md:h-7 cursor-pointer' alt="" srcSet="" />
                            <img src="/images/inst.png" className='w-7 md:w-8 h-7 md:h-8 mx-4 md:mx-6 cursor-pointer' alt="" srcSet="" />
                            <img src="/images/twiter.png" className='w-6 md:w-7 h-6 md:h-7 cursor-pointer' alt="" srcSet="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactInfo;