import React from 'react'
import Button from '../Button'
import Title from '../Title'
import Chef from '../Chef'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { topThreeChef } from '../../Features/chefSlice'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Chefs() {
    const [t] = useTranslation()
    const title = {
        part1: t('bestChef.part1'),
        part2: t('bestChef.part2')
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(topThreeChef())
    }, [dispatch]);
    const chefInfo = useSelector((state) => state.chefs.topThreeChefs)
    const chefs = chefInfo.map((data,key) => {
        return (
            <Chef chef={data} id={key} />
        )
    })
    return (
        <div className='py-4'>
            <Title title={title} />
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {chefs}
            </div>
            <NavLink className='flex justify-center items-center' to="/Chefs">
                <Button bgColor="#151515" textColor="#FFFFFF" flecheIm="/images/fleche_white.png" />
            </NavLink>
        </div>
    )
}