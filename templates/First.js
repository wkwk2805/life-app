import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import CustomNextArrow from '../components/header/CustomNextArrow';
import MainTop from '../components/header/MainTop'

const First = () => {
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
        window.addEventListener('resize',setWindow);
        return () => {
            window.removeEventListener('resize',setWindow);
        }
    },[windowWidth,windowHeight])
    const settings = {
        speed: 500,
        fade: true,
        autoplaySpeed: 2000,
        infinite:true,
        autoplay: true,
        nextArrow: <CustomNextArrow />,
        className:'minus-mb'
    }
    return (
        <> 
        <Slider {...settings}>
            <MainTop isBg1={true} windowHeight={windowHeight} windowWidth={windowWidth}/>
            <MainTop isBg1={false} windowHeight={windowHeight} windowWidth={windowWidth}/>
        </Slider>
        </>
    )
}

export default First
