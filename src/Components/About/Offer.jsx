import React from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../Title'
import OfferCard from './OfferCard'

export default function Offer() {
    const [t, i18n] = useTranslation()
    const title = {
        part1: t('offer.part1'),
        part2: t('offer.part2')
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
        <section>
            <Title title={title} />
            <div className='grid grid-cols-1 sm:grid-cols-3 pt-4'>
                {offers}
            </div>
        </section>
    )
}