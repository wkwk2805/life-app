import React from 'react'

const Eighth = () => {
    const instagram = 'https://instagram.com/lif2and?igshid=iwl4ws236u3u';
    const kakao = 'http://pf.kakao.com/_XxiSxfK';
    const facebook = 'https://www.facebook.com/lifenapp/';
    const moveToPage = (url) => {
        location.href = url;
    }
    return (
        <>
            <style jsx>{`
                .pl2 {padding-left:2vw;}
                .pr2 {padding-right:2vw;}
                .br {border-right:0.1vw solid grey}
                .bl {border-left:0.1vw solid grey}
                .m {margin:1.5vw}
                .small-font {font-size:2vw;}
                .m10 {margin:5vw 10vw;}
            `}</style>
            <div className="container m10">
                <div className="top m small-font">
                    <span className="pr2 br"><strong>이용약관</strong></span>
                    <span className="pl2 bl"><strong>개인정보처리방침</strong></span>
                </div>
                <div className="middle m small-font">
                    <strong>대표</strong> 김규리<br/>
                    <strong>주소</strong> 서울특별시 서초구 남부순환로289길 5, 1층 그린리본(방배동, 삼영빌딩)<br/>
                    <strong>사업자등록번호</strong> 377-86-1897 ㅣ <strong>메일주소</strong> greenribbon@green-ribbon.co.kr<br/>
                    그린리본은 보험사와 보험소비자 간의 정보 불균형과 구조적 문제를 해소하여<br/>
                    소비자의 권익을 보호하기 위해 서비스를 제공하고있습니다.<br/>
                    그린리본이 제공하는 보상서비스는 개별 보험약관 기준에 맞춰 놓친 보험금을 찾습니다.
                </div>
                <div className="flex-row justify-between">
                    <div className="bottom m small-font">
                        Copyright ⓒ GreenRibbon. All rights reserved.
                    </div>
                    <div className="icon">
                        <img className="pointer" src="/images/instagram.png" onClick={() => {moveToPage(instagram)}}/>
                        <img className="pointer" src="/images/facebook.png" onClick={() => {moveToPage(facebook)}} />
                        <img className="pointer" src="/images/kakao.png" onClick={() => {moveToPage(kakao)}} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eighth
