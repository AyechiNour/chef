import React from 'react';
import Caroussel from '../Caroussel';
import Chef from '../Chef';
import LeftButtonBlack from '../LeftButtonBlack';
import RightButtonBlack from '../RightButtonBlack';
import Title from '../Title';
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';
const Cheff = () => {
    const [t] = useTranslation()
    const title = {
        part1: t('chef.part1'),
        part2: t('chef.part2')
    }
    const chefsInfo = useSelector((state) => state.chefs.chefsInfo)
    const chefs = chefsInfo.map((data,key) => {
        return (
            <Chef chef={data} id={key}  />
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
                <Caroussel items={chefs} responsive={responsive} rightBouttom={<RightButtonBlack />} leftBouttom={<LeftButtonBlack />} />
            </div>
        </div>
    );
}
export default Cheff;