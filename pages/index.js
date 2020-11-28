import React from 'react'
import First from '../templates/First'
import Fiveth from '../templates/Fiveth'
import Fourth from '../templates/Fourth'
import Second from '../templates/Second'
import Sixth from '../templates/Sixth'
import Third from '../templates/Third'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Seventh from '../templates/Seventh'
import Eighth from '../templates/Eighth'

const index = () => {
    return (
        <div>
            <First/>
            <Second/>
            <Third/>
            <Fourth/>
            <Fiveth/>
            <Sixth/>
            <Seventh/>
            <Eighth/>
            <style global jsx>{`
                body{
                    margin:0;
                    padding:0;
                }
                div {
                    font-family : AppleSDGothicNeoM;
                }
            `}</style>
        </div>
    )
}

export default index
