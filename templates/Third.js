import React from 'react'
import ChangeImage from '../components/third/ChangeImage'

const Third = () => {
    return (
        <>
            <style jsx>{`
                .container {height:60vw;display:flex;justify-content:center;align-items:center;}
                .text {font-size:4.5vw;font-family:SDNemony2dBasicBd;margin-left:10vw}
                .text span {font-weight:bold;}
                .sub-text {font-size:2vw;margin-top:2vw}
                .green {color:#37ae40;}
            `}</style>
            <div>
                <div className="container">
                    <div className="text">
                        <div><span>받을 수</span>{' '}있는</div>
                        <div><span className="green">보험금</span>이{' '}<span>이렇게나</span></div>
                        <div><span>많이</span>{' '}있다고?</div>
                        <div className="sub-text">
                            <div>아무도 알려주지 않는 숨은 보험금</div>
                            <div>라이프앤이 다 알려드립니다</div>
                            <div>안심하고 확인하세요!</div>
                        </div>
                    </div>
                    <ChangeImage/>
                </div>
            </div>
        </>
    )
}

export default Third
