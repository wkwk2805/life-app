import React from 'react'
import SmallBtn from '../components/SmallBtn'

const First = () => {
    return (
        <>
            <style jsx
            >{`
              div {
                display:flex;
                flex-direction:column;
              }
              .container {
                  width:auto;
                  flex-direction:column;
                  width:100%;
                  height:80em;
              }
              .background{
                background:url('/images/rending_page_mockup1.png') no-repeat;
                background-size:contain;
                height:100%;
              }
              .main {
                flex-grow:1;
              }
              .bottom {
                  flex-direction:row;
                  justify-content: center;
              }
            `}
            </style>
            <div className="container">
                <div className="background">
                    <div className="main">
                        Main
                    </div>
                    <div className="bottom">
                        <SmallBtn/>
                        <SmallBtn/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default First
