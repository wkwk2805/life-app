import React from 'react'

const MainTop = () => {
    return (
        <>
            <style jsx>{`
                div {display:flex;}
                .left {flex:1;flex-grow:1;flex-direction:column;}
                
                .logo {margin: 3vw;}
                .logo img {width:30%;}
                
                .title-container {flex-direction:column;margin-bottom:3em;}
                .rest {justify-content:center;margin:5em 0 2em 0;}
                .title {font-size:12em;font-weight:bold;color:white;justify-content:center;}
                .subtitle {font-size:4em;color:white;justify-content:center;font-weight:100}
                
                .right {flex:1;flex-grow:1;}
                .btns {justify-content:center;margin-top:20vh;}
                .google-btn {width:40%;margin-right:2em;}
                .apple-btn {width:40%;}
                .right {justify-content:flex-end;}
                .right img {width:10%;height:10%;margin:3em;}

                /*********** media query ***********/
                @media screen and (max-width:768px) {
                    .rest {justify-content:center;margin:1em 0 0.5em 0;}
                    .rest img {width:5%;height:5%;}
                    .title-container {flex-direction:column;margin-bottom:2em;}
                    .btns {margin-top:0vh;}
                    .title {font-size:2em;}
                    .subtitle {font-size:1em;}
                    .logo {margin:1vw;}
                    .logo img {width:20%;height:20%;}
                    .subtitle {font-size:0.3em;}
                    .google-btn {width:25%;height:25%;margin-right:2vw;}
                    .apple-btn {width:25%;height:25%;}
                    .right img {width:9%;height:9%;margin:0.3em;}
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
                <div className="btns">
                    <img className="google-btn" src="/images/GooglePlay.png"/>
                    <img className="apple-btn" src="/images/Appstore_logo.png"/>
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
