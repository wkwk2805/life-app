import React from 'react'
import Header from '../templates/Header'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Seventh from '../templates/Seventh'
import Eighth from '../templates/Eighth'
import Section1 from '../templates/Section1'
import Section2 from '../templates/Section2'
import Section3 from '../templates/Section3';

const index = () => {
    return (
        <div>
            <Header/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Seventh/>
            <Eighth/>
        </div>
    )
}

export default index
