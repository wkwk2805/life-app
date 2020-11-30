import React from 'react'

const Top = () => {
    return (
        <>
            <div>
                <div className="section-container">
                    <div className="section-header-text ml10">
                        <img src="/images/subtitle3.png" style={{width:'40vw', height:'30vw',marginBottom:'-17vw'}}/>
                        {/* <div><span className="bold green">건강관리</span></div>
                        <div><span className="bold">잘하고</span>{' '}계시나요?</div> */}
                        <div className="section-sub-text">
                            <div>깜빡하고 챙겨 먹지 못하는 약!</div>
                            <div>나의 몸 상태를 체크할 수 있는</div>
                            <div>건강검진 결과까지</div>
                            <div>라이프앤이 책임져드립니다</div>
                        </div>
                    </div>
                    <div className="phone-mockup">
                        <img src="/images/contents3-1.png"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Top
