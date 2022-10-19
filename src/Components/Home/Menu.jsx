import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button'
import Caroussel from '../Caroussel'
import Dish from '../Dish'
import LeftButtonWhite from '../LeftButtonWhite'
import RightButtonWhite from '../RightButtonWhite'
import Title from '../Title'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { topTenPlats } from '../../Features/platSlice'
import { useTranslation } from 'react-i18next'

export default function Menu() {
    const [t, i18n] = useTranslation()
    const title = {
        part1: t('menu.part1'),
        part2: t('menu.part2'),
        color: "#FFFFFF"
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(topTenPlats())
    }, [dispatch]);
    const platInfo = useSelector((state) => state.plats.topTenPlat)
    const dishes = platInfo.map((dish) => {
        return (
            <Dish dish={dish} bgColor="#FFFFFF" textColor="#000000" />
        )
    })
    const responsive = {
        0: {
            items: 1
        },
        800: {
            items: 2
        },
        1200: {
            items: 3
        },
        1500: {
            items: 4
        }
    }
    return (
        <div className="realtive bg-im mt-8 pb-8" >
            <Title title={title} />
            <div className='mt-4'>
                <Caroussel items={dishes} responsive={responsive} rightBouttom={<RightButtonWhite />} leftBouttom={<LeftButtonWhite />} />
            </div>
            <NavLink className='flex justify-center items-center' to="/Menu">
                <Button bgColor="#FFFFFF" textColor="#000000" flecheIm="/images/fleche_black.png" />
            </NavLink>
        </div>
    )
}