import React from 'react'

const Security = () => {
    const bgImageUrl = '/images/rending_page_security2.png';
    return (
        <>
            <div>
                <div className="division"></div>
                <div className="section3-sub-container ">
                    <div className="bgImage">
                        <img src={bgImageUrl} />
                    </div>
                    <div className="section-header-text">
                        <span className="green bold">개인정보</span>가{' '}<span className="bold">유출 될까 걱정</span>이신가요?
                    </div>
                    <div className="section3-sub-text">
                        <ol>
                            <li>가입시 입력하는 <strong>개인정보</strong>는 <strong>정보통신망법</strong> 및 <strong>개인정보보호법</strong>에 <strong>근거</strong>하여<br/><strong>안전</strong>하고 <strong>강력한 암호 알고리즘</strong>에 의하여 <strong>암호화되어</strong> 있습니다.</li>
                            <br/>
                            <li>사용자의 <strong>인증 정보</strong>는 <strong>본인 스마트폰</strong>에만 <strong>저장&관리</strong>되고 있어<br/><strong>제3자</strong>의 <strong>열람</strong>이 <strong>불가</strong>합니다.</li>
                            <br/>
                            <li>사용자의 휴대폰에서 <strong>그린리본</strong>의 <strong>서버</strong>까지, 데이터가 이동하는 <strong>모든 통신 구간</strong>과<br/><strong>데이터가 보관</strong>되는 <strong>데이터 베이스</strong>는 <strong>항시 암호화</strong>된 <strong>상태</strong>로 <strong>운영</strong>됩니다.</li>
                        </ol>
                    </div>
                    <div className="bottom-text">
                        <div>
                            출시 이래 보안사건 0건
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Security
