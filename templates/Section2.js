import React, {useState, useEffect } from 'react'
import Slider from 'react-slick'
import CustomNextArrow from '../components/header/CustomNextArrow'

const Section2 = () => {
    const [width, setWidth] =useState(0);
    useEffect(() => {
        setWidth(innerWidth);
    }, [])
    const settings = {
        speed: 500,
        autoplaySpeed: 3000,
        autoplay:true,
        infinite: true,
        pauseOnHover:false,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomNextArrow />,
    }
    return (
        <>
            <div>
                <div className="section-container section-bg-color">
                    <div className="phone-mockup">
                    {width > 768 ?
                        <Slider {...settings}>
                            <img src="/images/contents2-1.png"/>
                            <img src="/images/contents2-2.png"/>
                            <img src="/images/contents2-3.png"/>
                        </Slider>:
                        <img src="/images/contents2-1.png"/>
                    }
                    </div>
                    <div className="section-header-text mr10">
                        <img src="/images/subtitle2.png" style={{width:'50vw', height:'30vw', marginBottom:'-11vw'}}/>
                        <div className="section-sub-text align-right">
                            <div>인공지능이 안전한 병원을 추천하고,</div>
                            <div>내 보험으로 보장 가능 여부를 안내해드립니다</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2
