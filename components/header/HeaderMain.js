import React from 'react'

const HeaderMain = ({isBg1 = false, windowWidth, windowHeight, downPage}) => {
    const bgUrl = isBg1 ? "/images/background_image1.png" : "/images/background_image2.png"
    const instagram = 'https://instagram.com/lif2and?igshid=iwl4ws236u3u';
    const kakao = 'http://pf.kakao.com/_XxiSxfK';
    const facebook = 'https://www.facebook.com/lifenapp/';
    const googlePlay = 'https://play.google.com/store/apps/details?id=com.softsquared.android.greenribbon';
    const moveToPage = (url) => {
        location.href = url;
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
                        <img className="pointer" src="/images/instagram.png" onClick={() => {moveToPage(instagram)}}/>
                        <img className="pointer" src="/images/facebook.png" onClick={() => {moveToPage(facebook)}}/>
                        <img className="pointer" src="/images/kakao.png" onClick={() => {moveToPage(kakao)}}/>
                    </div>
                </div>
                <div className="flex-row grow1">
                    <div className="title grow1 flex-column align-center">
                        <div className="flex-column grow1 align-center justify-center">
                            <img src="/images/rest.png" />
                            <div className="header-font white">라이프앤</div>
                            <div className="sub-font white">보험부터 건강까지</div>
                        </div>
                        <div className="store-btns grow1 flex-row align-center">
                            <img className="pointer" src="/images/GooglePlay.png" onClick={()=>{moveToPage(googlePlay)}}/>
                            <img className="pointer" src="/images/Appstore_logo.png" onClick={()=>{alert("서비스 준비중 입니다\n조금만 기다려주세요")}}/>
                        </div>
                        <div className="flex-row align-end align-self-flex-end">
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
