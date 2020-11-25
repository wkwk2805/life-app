import React from 'react';

const SmallBtn = () => {
    return <>
        <style jsx>{`
            .small-btn {
                margin:0.3em;
                width:2em;
                height:0.3em;
                background-color:white;
                border-radius:1em;
            }
        `}</style>
        <div className="small-btn"></div>
    </>
}

export default SmallBtn;