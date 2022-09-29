import React from 'react';
import Title from '../Title';
import Dish from '../Dish'
import RightBouttonBlack from '../RightBouttonBlack';
import LeftBouttonBlack from '../LeftBouttonBlack';
import Caroussel from '../Caroussel';

const BestSeller = () => {
    const title = {
        part1: "Best",
        part2: "Seller"
    }
    const bestSellerInfo = [
        {
            name: "Indian Curry",
            price: "75",
            imgPath: "/images/dish1.png",
            rate: 5
        },
        {
            name: "Rougail Saucisse",
            price: "57",
            imgPath: "/images/dish2.png",
            rate: 4
        },
        {
            name: "Oeuf Cocotte",
            price: "30",
            imgPath: "/images/dish3.png",
            rate: 4
        },
        {
            name: "Indian Curry",
            price: "75",
            imgPath: "/images/dish1.png",
            rate: 3
        }, {
            name: "Rougail Saucisse",
            price: "57",
            imgPath: "/images/dish2.png",
            rate: 2
        }, {
            name: "Oeuf Cocotte",
            price: "30",
            imgPath: "/images/dish3.png",
            rate: 1
        }
    ]
    const bestSellers = bestSellerInfo.map((data) => {
        return (
            <Dish dish={data} bgColor="#151515" textColor="#FFFFFF" />
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
        <div>
            <Title title={title} />
            <Caroussel items={bestSellers} responsive={responsive} rightBouttom={<RightBouttonBlack/>} leftBouttom={<LeftBouttonBlack/>} />
        </div>
    );
}

export default BestSeller;
