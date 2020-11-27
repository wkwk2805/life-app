import React from 'react'

const Seventh = () => {
    return (
        <>
            <style jsx>{`
                .text span {font-weight:bold}
                .green {color:#37ae40;}
            `}</style>
            <div className="container">
               <div className="text">
                <span className="green">라이프앤</span>을{' '}<span>사용</span>한
                <br/>
                <span>사용자들</span>의<span>리뷰</span>
               </div>
            </div> 
        </>
    )
}

export default Seventh
