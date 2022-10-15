import React from 'react'
import { NavLink } from 'react-router-dom'
import Boutton from '../Boutton'
import Caroussel from '../Caroussel'
import Dish from '../Dish'
import LeftBouttonWhite from '../LeftBouttonWhite'
import RightBouttonWhite from '../RightBouttonWhite'
import Title from '../Title'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { topTenPlats } from '../../Features/platSlice'
export default function Menu() {
    const title = {
        part1: "Our",
        part2: "Menu",
        color: "#FFFFFF"
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(topTenPlats())
    }, [dispatch]);
    const platInfo = useSelector((state) => state.plats.topTenPlat)
    console.log( useSelector((state) => state.plats.topTenPlat))
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
                <Caroussel items={dishes} responsive={responsive} rightBouttom={<RightBouttonWhite />} leftBouttom={<LeftBouttonWhite />} />
            </div>
            <NavLink className='flex justify-center items-center' to="/Menu">
                <Boutton bgColor="#FFFFFF" textColor="#000000" flecheIm="/images/fleche_black.png" />
            </NavLink>
        </div>
    )
}