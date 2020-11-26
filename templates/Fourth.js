import React from 'react'
import ChangeImage2 from '../components/fourth/ChangeImage2'

const Fourth = () => {
    return (
        <>
            <style jsx>{`
                .container {height:60vw;display:flex;justify-content:center;align-items:center;background:#f8f8f8}
                .text {font-size:4.5vw;font-family:SDNemony2dBasicBd;}
                .text span {font-weight:bold;}
                .sub-text {font-size:2vw;margin-top:2vw}
                .green {color:#37ae40;}
            `}</style>
            <div>
                <div className="container">
                    <ChangeImage2 />
                    <div className="text">
                        <div><span className="green">보험금</span>을{' '}<span>놓치지 않도록</span></div>
                        <div><span>방지</span>해드립니다</div>
                        <div>병원가기전<span>습관!</span></div>
                        <div className="sub-text">
                            <div>인공지능이 안전한 병원을 추천하고,</div>
                            <div>내 보험으로 보장 가능 여부를 안내해드립니다</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fourth
