import React from 'react'
import Title from '../Title'
import OfferCard from './OfferCard'

export default function Offer() {
    const title = {
        part1: "Our",
        part2: "Offers"
    }
    const offersInfo = [
        {
            imgPath: "/images/food.png",
            offer: "Luxury food",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            imgPath: "/images/drinks.png",
            offer: "Soft drinks",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            imgPath: "/images/Vue.png",
            offer: "Best vue",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    ]
    const offers = offersInfo.map((offer) => {
        return (
            <OfferCard offer={offer} />
        )
    })
    return (
        <div>
            <Title title={title} />
            <div className='grid grid-cols-1 sm:grid-cols-3 pt-4'>
                {offers}
            </div>
        </div>
    )
}