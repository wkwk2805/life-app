import React from 'react'
import Header from '../templates/Header'
import Fiveth from '../templates/Fiveth'
import Sixth from '../templates/Sixth'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Seventh from '../templates/Seventh'
import Eighth from '../templates/Eighth'
import Section1 from '../templates/Section1'
import Section2 from '../templates/Section2'

const index = () => {
    return (
        <div>
            <Header/>
            <Section1/>
            <Section2/>
            <Fiveth/>
            <Sixth/>
            <Seventh/>
            <Eighth/>
        </div>
    )
}

export default index
