import React from 'react';
import ArchitectureCard from './ArchitectureCard'
import Title from '../Title'
import RightBouttonBlack from '../RightBouttonBlack';
import LeftBouttonBlack from '../LeftBouttonBlack';
import Caroussel from '../Caroussel';

const Architecture = () => {
    const title = {
        part1: "Our",
        part2: "Offers"
    }
    const archiInfo = [
        {
            imgPath: "/images/restobar.png",
            place: "Bar Restaurant"
        },
        {
            imgPath: "/images/restobar.png",
            place: "Bar Restaurant"
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
        <div>
            <Title title={title} />
            <div className='mt-4'>
                <Caroussel items={architecture} responsive={responsive} rightBouttom={<RightBouttonBlack />} leftBouttom={<LeftBouttonBlack />} />
            </div>
        </div>
    );
}

export default Architecture;