import React from 'react'

const NumberMoney = ({count, won, won2}) => {
    return (
        <>
           <div className="number-money">
                <div className="container">
                    <div className="bg-common bg1" />
                    <div className="bg-common bg2">
                        <div className="text">
                            <div>앱 다운로드</div>
                            <div>보상 받아야 할 금액</div>
                            <div>지급 받은 보험금</div>
                        </div>
                        <div className="division"></div>
                        <div className="number">
                            <div>{count}건</div>
                            <div>{won}원</div>
                            <div>{won2}원</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NumberMoney
