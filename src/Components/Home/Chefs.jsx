import React from 'react'
import Boutton from '../Boutton'
import Title from '../Title'
import Chef from '../Chef'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { topThreeChef } from '../../Features/chefSlice'
import { useEffect } from 'react'

export default function Chefs() {
    const title = {
        part1: "Best",
        part2: "Chefs"
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(topThreeChef())
    }, [dispatch]);
    const chefInfo = useSelector((state) => state.chefs.topThreeChefs)
    const chefs = chefInfo.map((data) => {
        return (
            <Chef chef={data} />
        )
    })
    return (
        <div className='py-4'>
            <Title title={title} />
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {chefs}
            </div>
            <NavLink className='flex justify-center items-center' to="/Chefs">
                <Boutton bgColor="#151515" textColor="#FFFFFF" flecheIm="/images/fleche_white.png" />
            </NavLink>
        </div>
    )
}