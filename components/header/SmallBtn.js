import React from 'react';

const SmallBtn = ({active}) => {
    return <>
        <div className={`small-btn ${active && 'active'}`}></div>
    </>
}

export default SmallBtn;