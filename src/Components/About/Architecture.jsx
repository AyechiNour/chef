import React from 'react';
import ArchitectureCard from './ArchitectureCard'
import Title from '../Title'
import RightButtonBlack from '../RightButtonBlack';
import LeftButtonBlack from '../LeftButtonBlack';
import Caroussel from '../Caroussel';
import { useTranslation } from 'react-i18next';

const Architecture = () => {
    const [t, i18n] = useTranslation()
    const title = {
        part1: t('archi.part1'),
        part2: t('archi.part2')
    }
    const archiInfo = [
        {
            imgPath: "/images/restobar.png",
            place: "Restaurant"
        },
        {
            imgPath: "/images/archi1.jpg",
            place: "Restaurant"
        },
        {
            imgPath: "/images/archi2.jpg",
            place: "Restaurant"
        },
        {
            imgPath: "/images/archi3.jpg",
            place: "Restaurant"
        },
        {
            imgPath: "/images/archi4.jpg",
            place: "Restaurant"
        }
    ]
    const architecture = archiInfo.map((data) => {
        return (
            <ArchitectureCard archi={data} />
        )
    })
    const responsive = {
        0: {
            items: 1
        }
    }
    return (
        <section>
            <Title title={title} />
            <div className='mt-4'>
                <Caroussel items={architecture} responsive={responsive} rightBouttom={<RightButtonBlack />} leftBouttom={<LeftButtonBlack />} />
            </div>
        </section>
    );
}
export default Architecture;