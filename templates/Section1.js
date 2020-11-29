import React from 'react'
import Second from '../components/section1/Second'
import Third from '../components/section1/Third'

const Section1 = ({count, won, won2}) => {
    return (
        <>
            <Second count={count} won={won} won2={won2}/>
            <Third/>
        </>
    )
}

export default Section1
