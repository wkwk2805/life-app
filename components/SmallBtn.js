import React from 'react';

const SmallBtn = ({active}) => {
    const bgImageWidth = 8000;
    const bgImageHeight = 4501;
    return <>
        <style jsx>{`
            .small-btn {
                margin:calc(${bgImageHeight} / ${bgImageWidth} * 1.6vw);
                margin-bottom: calc(${bgImageHeight} / ${bgImageWidth} * 2vw);
                width:10vw;
                height:calc(${bgImageHeight} / ${bgImageWidth} * 0.8vw);
                background-color:white;
                border-radius:1em;
            }
            .small-btn.active {
                background-color:#474747;
            }
        `}</style>
        <div className={`small-btn ${active && 'active'}`}></div>
    </>
}

export default SmallBtn;