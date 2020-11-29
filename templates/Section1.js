import React from 'react'
import NumberMoney from '../components/section1/NumberMoney'
import Main from '../components/section1/Main'

const Section1 = ({count, won, won2}) => {
    return (
        <>
            <NumberMoney count={count} won={won} won2={won2}/>
            <Main/>
        </>
    )
}

export default Section1
