import React from 'react'
import Slider from 'react-slick';
import CustomNextArrow from '../components/header/CustomNextArrow'
import Review from '../components/seventh/Review'

const Seventh = () => {
    const settings = {
        speed: 500,
        autoplaySpeed: 3000,
        infinite: false,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomNextArrow />,
        slidesToScroll: 1,
        variableWidth:true,
        centerMode: true,
        initialSlide : 1
    }
    const text = `바빠서 보험금 신청을 바로
    못하였는데 저렴한 수수료에
    서비스를 받을 수 있어서
    너무 편했습니다.
    꽁돈이 생긴 것 같아서 좋네요!`;
    return (
        <>
            <style jsx>{`
                .container {height:70vw;text-align:center;padding-top:10vw;background:#f8f8f8}
                .text {font-size:3vw}
                .text span {font-weight:bold}
                .green {color:#37ae40;}
            `}</style>
            <div className="container">
               <div className="text">
                <span className="green">라이프앤</span>을{' '}<span>사용</span>한
                <br/>
                <span>사용자들</span>의<span>{' '}리뷰</span>
               </div>
               <div>
                <Slider {...settings}>
                    <Review userInfo={{initial:'k씨',gender:'남',age:20}} text={text}/>
                    <Review userInfo={{initial:'r씨',gender:'여',age:30}} text={text}/>
                    <Review userInfo={{initial:'x씨',gender:'남',age:40}} text={text}/>
                    <Review userInfo={{initial:'q씨',gender:'남',age:50}} text={text}/>
                    <Review userInfo={{initial:'w씨',gender:'여',age:60}} text={text}/>
                    <Review userInfo={{initial:'m씨',gender:'남',age:70}} text={text}/>
                    <Review userInfo={{initial:'b씨',gender:'여',age:80}} text={text}/>
                    <Review userInfo={{initial:'f씨',gender:'여',age:90}} text={text}/>
                </Slider>
            </div>
            </div>
            
        </>
    )
}

export default Seventh
