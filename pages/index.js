import React, { useEffect } from 'react'
import Header from '../templates/Header'
import ReviewList from '../templates/ReviewList'
import Bottom from '../templates/Bottom'
import Section1 from '../templates/Section1'
import Section2 from '../templates/Section2'
import Section3 from '../templates/Section3';

import { useCountUp } from 'react-countup'

const index = () => {
    const count = useCountUp({
        start: 0,
        end: 1234567,
        delay: 1000,
        duration: 1,
        separator:',',
    });
    const won = useCountUp({
        start: 0,
        end: 1234567,
        delay: 1000,
        duration: 1,
        separator:',',
    });
    const won2 = useCountUp({
        start: 0,
        end: 1234567,
        delay: 1000,
        duration: 1,
        separator:',',
    });
    const downPage = (e) => {
        if(window.innerWidth > 768){
            window.scrollTo({top:window.innerHeight, left:window.innerWidth, behavior:'smooth'} );
            countUp();
        }
    }
    const countUp = () => {
        count.start();
        won.start();
        won2.start();
    }
    useEffect(() => {
        countUp();
    }, [])
    return (
        <div>
            <Header downPage={downPage}/>
            <Section1 count={count.countUp} won={won.countUp} won2={won2.countUp} />
            <Section2/>
            <Section3/>
            <ReviewList/>
            <Bottom/>
        </div>
    )
}

export default index
