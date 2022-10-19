import React from 'react';
import { useEffect, useState } from 'react';

const Preloader = () => {
    const [apparence, setapparence] = useState(true);
    const [animation, setanimation] = useState(true);
    useEffect(() => {
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            setanimation(false);
            document.body.style.overflow = "visible";
        }, 2000);
        setTimeout(() => {
            setapparence(false);
        }, 3000);
    }, []);
    return (
        <>
            {apparence &&
                <div className={animation ? 'z-50 fixed h-screen w-screen flex justify-center items-center bg-white' : 'z-50 fixed h-screen w-screen flex justify-center items-center bg-white animate'}>
                    <img src="/images/ChefGif.gif" alt="" srcSet="" />
                </div>
            }
        </>
    );
}

export default Preloader;