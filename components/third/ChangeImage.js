import React from 'react'
import Slider from 'react-slick'
import CustomNextArrow from '../first/CustomNextArrow'

const ChangeImage = () => {
    const settings = {
        speed: 500,
        autoplaySpeed: 3000,
        infinite:true,
        pauseOnHover: true,
        autoplay: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomNextArrow />
    }
    return (
        <>
        <style jsx>{`
            img {margin:auto;width:100%;}
            .outline-none {outline:none;}
        `}</style>
        <div style={{width:'40%'}}>
            <Slider {...settings}>
                <div className='outline-none'>
                    <img src="/images/contents1-1.png"/>
                </div>
                <div className='outline-none'>
                    <img src="/images/contents1-2.png"/>
                </div>
                <div className='outline-none'>
                    <img src="/images/contents1-3.png"/>
                </div>
            </Slider>
        </div>
        </>
    )
}

export default ChangeImage
