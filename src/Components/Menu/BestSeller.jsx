import React from 'react';
import Title from '../Title';
import Dish from '../Dish'
import RightBouttonBlack from '../RightBouttonBlack';
import LeftBouttonBlack from '../LeftBouttonBlack';
import Caroussel from '../Caroussel';
import { useSelector } from 'react-redux'

const BestSeller = () => {
    const title = {
        part1: "Best",
        part2: "Seller"
    }
    const bestSellerInfo = useSelector((state) => state.plats.platInfo)
    const bestSellerInfoTri = [...bestSellerInfo]
    const bestSellers = bestSellerInfoTri.sort((a, b) => a.rate < b.rate ? 1 : -1)
        .slice(0, 11).map((data) => {
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
            <Caroussel items={bestSellers} responsive={responsive} rightBouttom={<RightBouttonBlack />} leftBouttom={<LeftBouttonBlack />} />
        </div>
    );
}
export default BestSeller;