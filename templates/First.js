import React from 'react';
import Slider from 'react-slick';
import Background1 from '../components/first/Background1';
import Background2 from '../components/first/Background2';
import CustomNextArrow from '../components/first/CustomNextArrow';

const First = () => {
    const settings = {
        speed: 500,
        fade: true,
        autoplaySpeed: 3000,
        infinite:true,
        pauseOnHover: true,
        autoplay: true,
        nextArrow: <CustomNextArrow />
    }
    return (
        <>
        <Background1/>
            {/* <Slider {...settings}>
                <div>
                    
                </div>
                <div>
                    <Background2/>
                </div>
            </Slider> */}
        </>
    )
}



export default First
