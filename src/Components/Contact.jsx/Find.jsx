import React from 'react';
import Title from '../Title';

const Find = () => {
    const title = {
        part1: "Find",
        part2: "Us"
    }
    return (
        <div style={{ backgroundColor: "#F2F2F2" }} className='mt-16 pb-4 md:pb-10'>
            <Title title={title} />
            <div>
                <div class="mapouter mt-4 px-6 md:px-16">
                    <div class="gmap_canvas">
                        <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=945&amp;height=876&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Find;
