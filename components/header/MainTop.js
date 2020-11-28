import React, { useEffect } from 'react'
import SmallBtn from './SmallBtn'

const MainTop = ({isBg1 = false, windowWidth, windowHeight}) => {
    const bgUrl = isBg1 ? "/images/background_image1.png" : "/images/background_image2.png"
    return (
        <div>
            <style jsx>{`
                @media screen and (min-width:768px) {
                    .header-container {width:${windowWidth}px;position:relative;z-index:2;top:-${windowHeight}px;margin:auto;height:0;}
                    .arrow {position:absolute;right:0;top: ${windowHeight * 260 / 410}px;}
                    .arrow img {width:7vw;height:14vw;}
                }
                
                @media screen and (max-width:768px) {
                    .header-container {width:${windowWidth}px;position:relative;z-index:2;top:-${windowHeight}px;margin:auto;height:0;}
                    .arrow {position:absolute;right:0;top: ${windowHeight * 280 / 410}px;}
                    .arrow img {width:8vw;height:16vw;margin: 1vw 2.5vw 0 0}
                }
            `}</style>
            <img className="background-image" src={bgUrl} width={windowWidth} height={windowHeight} />
            <div className="header-container">
                <div className="flex-column">
                    <div className="flex-grow1">
                        <div className="flex-row pd25 between">
                            <div className="logo">
                                <img src="/images/life_and_logo.png" width/>
                            </div>
                            <div className="icon flex-row">
                                <img src="/images/instagram.png"/>
                                <img src="/images/facebook.png"/>
                                <img src="/images/kakao.png"/>
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="title flex-column align-center">
                                <img src="/images/rest.png" />
                                <div className="header-font white">라이프앤</div>
                                <div className="sub-font white">보험부터 건강까지</div>
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="store-btns flex-row flex-center justify-center">
                                <img src="/images/GooglePlay.png"/>
                                <img src="/images/Appstore_logo.png"/>
                            </div>
                        </div>
                    </div>
                    <div className="small-btns flex-row">
                        {isBg1? 
                        <>
                            <SmallBtn active/>
                            <SmallBtn/>
                        </>:
                        <>
                            <SmallBtn />
                            <SmallBtn active/>
                        </>}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default MainTop
