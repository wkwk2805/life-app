import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import CustomNextArrow from '../header/CustomNextArrow'

const Main = () => {
    const [width, setWidth] =useState(0);
    useEffect(() => {
        setWidth(innerWidth);
    }, [])
    const settings = {
        speed: 500,
        autoplaySpeed: 2000,
        autoplay:true,
        infinite: true,
        pauseOnHover:false,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomNextArrow />,
    }
    return (
        <>
            <div>
                <div className="section-container">
                    <div className="section-header-text ml10">
                        <img src="/images/subtitle1.png" style={{width:'40vw',height:'30vw',marginBottom:'-13vw'}}/>
                        <div className="section-sub-text">
                            <div>아무도 알려주지 않는 숨은 보험금</div>
                            <div>라이프앤이 다 알려드립니다</div>
                            <div>안심하고 확인하세요!</div>
                        </div>
                    </div>
                    <div className="phone-mockup">
                    {width > 768 ? 
                        <Slider {...settings}>
                                <img src="/images/contents1-1.png"/>
                                <img src="/images/contents1-2.png"/>
                                <img src="/images/contents1-3.png"/>
                        </Slider>:
                        <img src="/images/contents1-1.png"/>
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
