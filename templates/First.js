import React from 'react'
import SmallBtn from '../components/SmallBtn'

const First = () => {
    const bgImageWidth = 8000;
    const bgImageHeight = 4501;
    return (
        <>
            <style jsx>{`
              div {
                display:flex;
                flex-direction:column;
              }
              .container {
                  width:auto;
                  flex-direction:column;
                  width: 100%;
                  height: calc(${bgImageHeight} / ${bgImageWidth} * 99vw) ; /* bgImageWidth : bgImageHeight = 100vw : x */
              }
              .background{
                background:no-repeat;
                background-size:100%;
                height:100%;
                background-image:linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/background_image.png')
              }
              .main {
                flex-grow:1;
              }
              .bottom {
                  flex-direction:row;
                  justify-content: center;
              }
            `}</style>
            <div className="container">
                <div className="background">
                    <div className="main">
                        Main
                    </div>
                    <div className="bottom">
                        <SmallBtn active/>
                        <SmallBtn/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default First
