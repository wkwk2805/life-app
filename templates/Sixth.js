import React from 'react'

const Sixth = () => {
    const bgImageUrl = '/images/rending_page_security2.png';
    return (
        <>
            <style jsx>{`
                .division {height:0.1vw;background:#c1c1c1;width:80%;margin:auto;}
                .container {height:70vw;width:80%;margin:auto;margin-top:5vw;}
                .sub-text {font-size:2vw;}
                .green {color:#37ae40;}
                .text {font-size:4vw;}
                .text span {font-weight:bold}
                .bottom-text {text-align:center;margin-left:20vw}
                .bottom-text div {font-size:1vw;border:0.1vw solid grey;padding:0.1vw 1vw; border-radius:0.2vw;display:inline-block}
                .sub-text ol {padding-left:3vw !important;}
                .bgImage img{position:absolute;right:0;width:70vw;height:50vw;opacity:0.2;margin-top: -5vw;}
                @media screen and (max-width:768px) { 

                }
            `}</style>
            <div>
                <div className="division"></div>
                <div className="container">
                    <div className="bgImage">
                        <img src="/images/rending_page_security2.png" />
                    </div>
                    <div className="text">
                        <span className="green">개인정보</span>가{' '}<span>유출 될까 걱정</span>이신가요?
                    </div>
                    <div className="sub-text">
                        <ol>
                            <li>가입시 입력하는 개인정보는 정보통신망법 및 개인정보보호법에 근거하여<br/>안전하고 강력한 암호 알고리즘에 의하여 암호화되어 있습니다.</li>
                            <br/>
                            <li>사용자의 인증 정보는 본인 스마트폰에만 저장&관리되고 있어<br/>제3자의 열람이 불가합니다.</li>
                            <br/>
                            <li>사용자의 휴대폰에서 그린리본의 서버까지, 데이터가 이동하는 모든 통신 구간과<br/>데이터가 보관되는 데이터 베이스는 항시 암호화된 상태로 운영됩니다.</li>
                        </ol>
                    </div>
                    <div className="bottom-text">
                        <div>
                            출시 아래 보안사건 0건
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Sixth
