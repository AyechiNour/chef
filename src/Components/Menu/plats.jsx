import React from 'react';
import Title from '../Title';
import { Pagination } from './Pagination';
import PlatCard from './PlatCard';

const Plats = () => {
    const title = {
        part1: "Our",
        part2: "Menu"
    }
    return (
        <div style={{ backgroundColor: "#F2F2F2" }}>
            <Title title={title} />
            <div className='px-3 md:px-5 lg:px-7 mt-1 lg:mt-3'>
                <div className='grid grid-cols-5 bg-white font-comforta font-bold text-base lg:text-lg'>
                    <button className='grid grid-cols-3 items-center border-2 border-black p-1 lg:p-2'>
                        <img className='justify-self-center w-7 md:w-12 lg:w-16 h-7 md:h-12 lg:h-16 col-span-3 md:col-span-1' src="/images/FastFood.png" alt="" srcset="" />
                        <span className='p-4 col-span-2 hidden md:block'>Fast Food</span>
                    </button>
                    <button className='grid grid-cols-3 items-center border-y-2 border-black p-1 lg:p-2'>
                        <img className='justify-self-center w-7 md:w-12 lg:w-16 h-7 md:h-12 lg:h-16 col-span-3 md:col-span-1' src="/images/breakfast.png" alt="" srcset="" />
                        <span className='p-4 col-span-2 hidden md:block truncate'>Breakfast</span>
                    </button>
                    <button className='grid grid-cols-3 items-center border-2 border-black p-1 lg:p-2'>
                        <img className='justify-self-center w-7 md:w-12 lg:w-16 h-7 md:h-12 lg:h-16 col-span-3 md:col-span-1' src="/images/Dish.png" alt="" srcset="" />
                        <span className='p-4 col-span-2 hidden md:block'>Dish</span>
                    </button>
                    <button className='grid grid-cols-3 items-center border-y-2 border-black p-1 lg:p-2'>
                        <img className='justify-self-center w-7 md:w-12 lg:w-16 h-7 md:h-12 lg:h-16 col-span-3 md:col-span-1' src="/images/Drink.png" alt="" srcset="" />
                        <span className='p-4 col-span-2 hidden md:block'>Drinks</span>
                    </button>
                    <button className='grid grid-cols-3 items-center border-2 border-black p-1 lg:p-2'>
                        <img className='justify-self-center w-7 md:w-12 lg:w-16 h-7 md:h-12 lg:h-16 col-span-3 md:col-span-1' src="/images/HealthyFood.png" alt="" srcset="" />
                        <span className='p-4 col-span-2 hidden md:block'>Healthy Food</span>
                    </button>
                </div>
                <Pagination itemsPerPage={4} />
            </div>
        </div>
    );
}
export default Plats;