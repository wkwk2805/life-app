import React from 'react'

const HeaderMain = ({isBg1 = false, windowWidth, windowHeight}) => {
    const bgUrl = isBg1 ? "/images/background_image1.png" : "/images/background_image2.png"
    const downPage = (e) => {
        if(windowWidth > 768){
            window.scrollTo({top:windowHeight, left:windowWidth, behavior:'smooth'} );
        }
    }
    return (
        <div>
            <style jsx>{`
                .background {background:url('${bgUrl}') no-repeat;background-size:${windowWidth}px ${windowHeight}px;}
                .header-container {width:${windowWidth}px;height:${windowHeight}px;margin:auto;}
            `}</style>
            <div className="header-container background flex-column">
                <div className="flex-row pd25 justify-between">
                    <div className="logo">
                        <img src="/images/life_and_logo.png"/>
                    </div>
                    <div className="icon flex-row">
                        <img src="/images/instagram.png"/>
                        <img src="/images/facebook.png"/>
                        <img src="/images/kakao.png"/>
                    </div>
                </div>
                <div className="flex-row grow1">
                    <div className="title grow1 flex-column align-center align-between">
                        <img src="/images/rest.png" />
                        <div className="header-font white">라이프앤</div>
                        <div className="sub-font white">보험부터 건강까지</div>
                        <div className="store-btns flex-row">
                            <img src="/images/GooglePlay.png"/>
                            <img src="/images/Appstore_logo.png"/>
                        </div>
                        <div className="flex-row align-end grow1 align-self-flex-end">
                            <div className="flex-column justify-end grow1">
                                <div className={`small-btn ${isBg1 && 'active'}`}></div>
                            </div>
                        </div>
                    </div>
                    <div className="grow1 flex-row">
                        <div className="grow1 align-self-flex-end">
                            <div className={`small-btn ${!isBg1 && 'active'}`}></div>
                        </div>
                        <div className="flex-row">
                            <div className="grow1 flex-column align-self-flex-end">
                                <img src="/images/down-arrow.png" className="arrow" onClick={downPage}/>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMain;
