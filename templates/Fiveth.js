import React from 'react'
import ChangeImage3 from '../components/fiveth/ChangeImage3'

const Fiveth = () => {
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
                        <div><span className="green">건강관리</span></div>
                        <div><span>잘하고</span>{' '}계시나요?</div>
                        <div className="sub-text">
                            <div>깜빡하고 챙겨 먹지 못하는 약!</div>
                            <div>나의 몸 상태를 체크할 수 있는</div>
                            <div>건강검진 결과까지</div>
                            <div>라이프앤이 책임져드립니다</div>
                        </div>
                    </div>
                    <ChangeImage3/>
                </div>
            </div>
        </>
    )
}

export default Fiveth
