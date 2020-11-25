import React from 'react'

const First = () => {
    return (
        <div className="first-background">
            <div className="head">
                <div>
                    LIFE&
                </div>
                <div>
                    <div>insta</div>
                    <div>facebook</div>
                    <div>kakao</div>
                </div>
            </div>
            <div className="middle">
                <div>left</div>
                <div>right</div>
            </div>
            <div className="bottom">bottom</div>
            <div className="title-font-container">
                <div className="title-font title">
                    라이프앤
                </div>
                <div className="title-font subtitle">
                    보험부터 건강까지
                </div>
            </div>
            <style jsx
            >{`
                .first-background {
                    background-color:grey;
                    display:flex;
                    flex-direction:column;
                }
                .title-font-container{
                    display:flex;
                    flex-direction:column;
                }
                .title-font {
                    font-family: AppleSDGothicNeo;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: normal;
                    letter-spacing: normal;
                    color: #ffffff;
                }
                .title {
                    font-size: 3em;
                    font-weight: bold;
                }
            `}
            </style>
        </div>
    )
}

export default First
