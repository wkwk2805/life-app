import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import CustomNextArrow from '../components/header/CustomNextArrow';
import HeaderMain from '../components/header/HeaderMain'

const Header = ({downPage}) => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    /* 웹사이트 width, height 기준으로 이미지를 컨트롤 함 */
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

    /* 웹사이트 크기 변환시 헤더 이미지 및 내용도 변경 */ 
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
        pauseOnHover:false,
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
