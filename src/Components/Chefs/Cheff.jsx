import React from 'react';
import Caroussel from '../Caroussel';
import Chef from '../Chef';
import LeftBouttonBlack from '../LeftBouttonBlack';
import RightBouttonBlack from '../RightBouttonBlack';
import Title from '../Title';
import { useSelector } from 'react-redux'
const Cheff = () => {
    const title = {
        part1: "Our",
        part2: "Chefs"
    }
    const chefsInfo = useSelector((state) => state.chefs.chefsInfo)
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