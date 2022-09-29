import React from 'react'
import Boutton from '../Boutton'
import Title from '../Title'
import Chef from '../Chef'
import { NavLink } from 'react-router-dom'

export default function Chefs() {
    const title = {
        part1: "Best",
        part2: "Chefs"
    }
    const chefInfo = [
        {
            name: "Gordon Ramsay",
            imgpath: "/images/PhotoChef1.png"
        },
        {
            name: "Jamie Oliver",
            imgpath: "/images/PhotoChef2.png"
        },
        {
            name: "Michael Caines",
            imgpath: "/images/PhotoChef3.png"
        }
    ]
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