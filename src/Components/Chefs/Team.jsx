import React from 'react';
import Title from '../Title';

const Team = () => {
    const title = {
        part1: "Our",
        part2: "Team"
    }
    return (
        <div>
            <Title title={title} />
            <div className='flex lg:flex-row flex-col-reverse mt-4'>
                <img className='lg:w-1/2 px-10 xl:px-24 py-4' src="/images/team.png" alt="" srcset="" />
                <div className='lg:w-1/2 flex justify-center items-center'>
                    <p className='font-battam text-base md:text-xl lg:text-3xl px-10 text-justify font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie suscipit volutpat. Ut vitae malesuada nulla. Proin ullamcorper convallis tellus id elementum. Sed tristique odio nec rhoncus semper. Maecenas est dui, gravida et ultricies ut, molestie vel tortor. Maecenas est dui, gravida et ultricies ut, molestie vel tortor.</p>
                </div>
            </div>
        </div>
    );
}
export default Team;