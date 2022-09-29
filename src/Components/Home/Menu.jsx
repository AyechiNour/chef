import React from 'react'
import { NavLink } from 'react-router-dom'
import Boutton from '../Boutton'
import Caroussel from '../Caroussel'
import Dish from '../Dish'
import LeftBouttonWhite from '../LeftBouttonWhite'
import RightBouttonWhite from '../RightBouttonWhite'
import Title from '../Title'

export default function Menu() {
    const title = {
        part1: "Our",
        part2: "Menu",
        color: "#FFFFFF"
    }
    const dishesInfo = [
        {
            name: "Indian Curry",
            price: "75",
            imgPath: "/images/dish1.png"
        },
        {
            name: "Rougail Saucisse",
            price: "57",
            imgPath: "/images/dish2.png"
        },
        {
            name: "Oeuf Cocotte",
            price: "30",
            imgPath: "/images/dish3.png"
        },
        {
            name: "Indian Curry",
            price: "75",
            imgPath: "/images/dish1.png"
        }, {
            name: "Rougail Saucisse",
            price: "57",
            imgPath: "/images/dish2.png"
        }, {
            name: "Oeuf Cocotte",
            price: "30",
            imgPath: "/images/dish3.png"
        }
    ]
    const dishes = dishesInfo.map((dish) => {
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
                <Caroussel items={dishes} responsive={responsive} rightBouttom={<RightBouttonWhite/>} leftBouttom={<LeftBouttonWhite/>} />
            </div>
            <NavLink className='flex justify-center items-center' to="/Menu">
                <Boutton bgColor="#FFFFFF" textColor="#000000" flecheIm="/images/fleche_black.png" />
            </NavLink>
        </div>
    )
}