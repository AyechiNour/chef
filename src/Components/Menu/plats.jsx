import { React, useState, useEffect } from 'react';
import Title from '../Title';
import { Pagination } from './Pagination';
import { useDispatch } from 'react-redux'
import { filterVar, setItemOffset } from '../../Features/platSlice';
import { useTranslation } from 'react-i18next';

const Plats = () => {
    const [t] = useTranslation()
    const title = {
        part1: t('menu.part1'),
        part2: t('menu.part2')
    }
    const [nbItem, setnbItem] = useState(1);
    useEffect(() => {
        if (window.innerWidth < 640) {
            setnbItem(4)
            console.log("nbitem", nbItem)
        } else if (window.innerWidth < 768) {
            setnbItem(6)
            console.log("nbitem", nbItem)
        } else if (window.innerWidth < 1024) {
            setnbItem(9)
            console.log("nbitem", nbItem)
        } else if (window.innerWidth < 1280) {
            setnbItem(12)
            console.log("nbitem", nbItem)
        } else {
            setnbItem(15)
        }
    }, [nbItem])
    const dispatch = useDispatch()
    return (
        <div style={{ backgroundColor: "#F2F2F2" }}>
            <Title title={title} />
            <div className='px-3 md:px-5 lg:px-7 mt-1 lg:mt-3'>
                <div className='grid grid-cols-6 bg-white font-comforta font-bold text-xs lg:text-base'>
                    <button onClick={() => { dispatch(filterVar("all")); dispatch(setItemOffset(0)) }} className='grid grid-cols-3 items-center border-2 border-black p-1 lg:p-2'>
                        <img className='justify-self-center w-5 md:w-8 lg:w-12 h-5 md:h-8 lg:h-12 col-span-3 md:col-span-1' src="/images/allFood.png" alt="" srcSet="" />
                        <span className='p-4 col-span-2 hidden md:block'>All</span>
                    </button>
                    <button onClick={() => { dispatch(filterVar("fast food")); dispatch(setItemOffset(0)) }} className='grid grid-cols-3 items-center border-y-2 border-black p-1 lg:p-2'>
                        <img className='justify-self-center w-5 md:w-8 lg:w-12 h-5 md:h-8 lg:h-12 col-span-3 md:col-span-1' src="/images/FastFood.png" alt="" srcSet="" />
                        <span className='p-4 col-span-2 hidden md:block'>Fast Food</span>
                    </button>
                    <button onClick={() => { dispatch(filterVar("breakfast")); dispatch(setItemOffset(0)) }} className='grid grid-cols-3 items-center border-2 border-black p-1 lg:p-2'>
                        <img className='justify-self-center w-5 md:w-8 lg:w-12 h-5 md:h-8 lg:h-12 col-span-3 md:col-span-1' src="/images/breakfast.png" alt="" srcSet="" />
                        <span className='p-4 col-span-2 hidden md:block truncate'>Breakfast</span>
                    </button>
                    <button onClick={() => { dispatch(filterVar("dish")); dispatch(setItemOffset(0)) }} className='grid grid-cols-3 items-center border-y-2 border-r-2 border-black p-1 lg:p-2'>
                        <img className='justify-self-center w-5 md:w-8 lg:w-12 h-5 md:h-8 lg:h-12 col-span-3 md:col-span-1' src="/images/Dish.png" alt="" srcSet="" />
                        <span className='p-4 col-span-2 hidden md:block'>Dish</span>
                    </button>
                    <button onClick={() => { dispatch(filterVar("drink")); dispatch(setItemOffset(0)) }} className='grid grid-cols-3 items-center border-y-2 border-black p-1 lg:p-2'>
                        <img className='justify-self-center w-5 md:w-8 lg:w-12 h-5 md:h-8 lg:h-12 col-span-3 md:col-span-1' src="/images/Drink.png" alt="" srcSet="" />
                        <span className='p-4 col-span-2 hidden md:block'>Drinks</span>
                    </button>
                    <button onClick={() => { dispatch(filterVar("healthy food")); dispatch(setItemOffset(0)) }} className='grid grid-cols-3 items-center border-2 border-black p-1 lg:p-2'>
                        <img className='justify-self-center w-5 md:w-8 lg:w-12 h-5 md:h-8 lg:h-12 col-span-3 md:col-span-1' src="/images/HealthyFood.png" alt="" srcSet="" />
                        <span className='p-4 col-span-2 hidden md:block'>Healthy Food</span>
                    </button>
                </div>
                <Pagination itemsPerPage={nbItem} />
            </div>
        </div>
    );
}
export default Plats;