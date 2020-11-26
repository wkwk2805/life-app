import React, { useEffect, useState } from 'react'
import SmallBtn from '../components/SmallBtn'
import MainTop from './MainTop';

const Background1 = () => {
    const bgImageWidth = 1922;
    const bgImageHeight = 1082;
    const bgImageUrl = '/images/background_image1.png'
    return (
        <>
            <style jsx>{`
              div {display:flex;flex-direction:column;}
              .container {flex-direction:column;width: 100%;height: calc(${bgImageHeight} / ${bgImageWidth} * 100vw);}
              .background1 {background: url('${bgImageUrl}') no-repeat;background-size:100%;height:100%;}
              .main {flex-grow:1;flex-direction:row;}
              .bottom {flex-direction:row;justify-content: center;}
            `}</style>
            <div className="container">
                <div className="background1">
                    <div className="main">
                        <MainTop />
                    </div>
                    <div className="bottom">
                        <SmallBtn active/>
                        <SmallBtn />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Background1
