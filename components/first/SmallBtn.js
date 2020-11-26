import React from 'react';

const SmallBtn = ({active}) => {
    const bgImageWidth = 1922;
    const bgImageHeight = 1082;
    return <>
        <style jsx>{`
            .small-btn {
                margin:calc(${bgImageHeight} / ${bgImageWidth} * 1.6vw);
                margin-bottom: calc(${bgImageHeight} / ${bgImageWidth} * 2vw);
                width:10vw;
                height:calc(${bgImageHeight} / ${bgImageWidth} * 0.8vw);
                background-color:#474747;
                border-radius:1em;
            }
            .small-btn.active {
                background-color: white;
            }
        `}</style>
        <div className={`small-btn ${active && 'active'}`}></div>
    </>
}

export default SmallBtn;