import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import CustomNextArrow from '../components/header/CustomNextArrow';
import HeaderMain from '../components/header/HeaderMain'

const Header = ({downPage}) => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    const setWindow = (innerWidth, innerHeight) => {
        if(innerWidth > 768){
            setWindowWidth(innerWidth);
            setWindowHeight(innerHeight);
        }else{
            const bgImageWidth = 1922;
            const bgImageHeight = 1082;
            setWindowWidth(innerWidth);
            setWindowHeight(innerWidth * bgImageHeight / bgImageWidth);
        }
    };
    useEffect(()=> {
        setWindow(innerWidth, innerHeight);
        if(innerWidth > 768){
            window.addEventListener('resize',setWindow);
        }
        return () => {
            if(innerWidth > 768){
                window.removeEventListener('resize',setWindow);
            }
        }
    },[windowWidth,windowHeight])
    const settings = {
        speed: 500,
        fade: true,
        autoplaySpeed: 3000,
        infinite:true,
        autoplay: true,
        nextArrow: <CustomNextArrow />,
    }
    return (
        <> 
        <Slider {...settings}>
            <HeaderMain downPage={downPage} isBg1={true} windowHeight={windowHeight} windowWidth={windowWidth}/>
            <HeaderMain downPage={downPage} isBg1={false} windowHeight={windowHeight} windowWidth={windowWidth}/>
        </Slider>
        </>
    )
}

export default Header