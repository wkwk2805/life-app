import React from 'react'

const MainTop = () => {
    return (
        <>
            <style jsx>{`
                div {display:flex;}
                .left {flex:1;flex-grow:1;flex-direction:column;}
                
                .logo {margin: 3vw;}
                .logo img {width:30%;height:4vw}
                
                .title-container {flex-direction:column;margin-bottom:3vw;justify-content:center;}
                .rest {justify-content:center;margin:5vw 0 1vw 0;}
                .rest img {height:4vw}
                .title {font-size:6vw;font-weight:bold;color:white;justify-content:center;}
                .subtitle {font-size:2vw;color:white;justify-content:center;font-weight:100}
                
                .right {flex:1;flex-grow:1;}
                .store-btns {justify-content:center;margin-top:5vw;}
                .store-btns img {width:40%;height:6vw}
                .store-btns img:first-child {margin-right:2vw}

                .right {justify-content:flex-end;}
                .right img {width:10%;height:10%;margin:1.5vw;}

                /*********** mobile ***********/
                @media screen and (max-width:768px) {
                    .rest {justify-content:center;margin:7vw 0 1.5vw 0;}
                    .rest img {width:5%;height:4vw;}
                    .title-container {flex-direction:column;margin-bottom:10vw;}
                    .store-btns {margin-top:0vw;}
                    .logo {margin:0.3em}
                    .logo img {width:25%;height:4vw}
                    .store-btns img {width:35%;height:6vw}
                    .store-btns img:first-child {margin-right:3vw}
                    .right img {width:9%;height:9%;margin:0.3em;}
                    .right img:last-child {margin-right:0.6em;}
                }
            `}</style>
            <div className="left">
                <div className="logo">
                    <img src="/images/life_and_logo.png" />
                </div>
                <div className="title-container">
                    <div className="rest">
                        <img src="/images/rest.png" width="5%"/>
                    </div>
                    <div className="title">라이프앤</div>
                    <div className="subtitle">보험부터 건강까지</div>
                </div>
                <div className="store-btns">
                    <img src="/images/GooglePlay.png"/>
                    <img src="/images/Appstore_logo.png"/>
                </div>
            </div>
            <div className="right">
                <img src="/images/instagram.png"/>
                <img src="/images/facebook.png"/>
                <img src="/images/kakao.png"/>
            </div>
        </>
    )
}

export default MainTop
