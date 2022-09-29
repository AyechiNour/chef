import React from 'react';
import Caroussel from '../Caroussel';
import Chef from '../Chef';
import LeftBouttonBlack from '../LeftBouttonBlack';
import RightBouttonBlack from '../RightBouttonBlack';
import Title from '../Title';

const Cheff = () => {
    const title = {
        part1: "Our",
        part2: "Chefs"
    }
    const chefsInfo = [
        {
            name: "Gordon Ramsay",
            imgpath: "/images/PhotoChef1.png",
            rate: 4
        },
        {
            name: "Jamie Oliver",
            imgpath: "/images/PhotoChef2.png",
            rate: 5
        },
        {
            name: "Michael Caines",
            imgpath: "/images/PhotoChef3.png",
            rate: 4
        },
        {
            name: "Gordon Ramsay",
            imgpath: "/images/PhotoChef1.png",
            rate: 1
        },
        {
            name: "Jamie Oliver",
            imgpath: "/images/PhotoChef2.png",
            rate: 2
        },
        {
            name: "Michael Caines",
            imgpath: "/images/PhotoChef3.png",
            rate: 3
        }
    ]
    const chefs = chefsInfo.map((data) => {
        return (
            <Chef chef={data} />
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
            <div>
                <Caroussel items={chefs} responsive={responsive} rightBouttom={<RightBouttonBlack />} leftBouttom={<LeftBouttonBlack />} />
            </div>
        </div>
    );
}
export default Cheff;