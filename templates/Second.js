import React from 'react'

const Second = () => {
    return (
        <>
            <style jsx>{`
                .container {display:block;height:15vw;}
                .bg-common {position:relative;height:15vw;margin-top:-0.5vw;border-radius:0 0 5vw 5vw;margin:auto;}
                .bg1 {background-color:#254129;width:75%;right:1vw;}
                .bg2 {background-color:#4c8453;width:70%;left:2.5vw;top:-15vw;}
                .text {display:flex;justify-content:space-around;font-size:2vw;}
                .text div {color:white;margin:3vw 0 1vw 0;}
                .division {height:0.3vw;background-color:white;width:90%;margin:auto}
                .number {display:flex;justify-content:space-around;font-size:3vw;}
                .number div {color:white;margin-top:1vw;}
            `}</style>
            <div>
                <div className="container">
                    <div className="bg-common bg1"></div>
                    <div className="bg-common bg2">
                        <div className="text">
                            <div>앱 다운로드</div>
                            <div>보상 받아야 할 금액</div>
                            <div>지급 받은 보험금</div>
                        </div>
                        <div className="division"></div>
                        <div className="number">
                            <div>123,403건</div>
                            <div>2,123,403원</div>
                            <div>4,123,403원</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Second
