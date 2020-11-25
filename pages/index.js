import React from 'react'
import First from '../templates/First'
import Fiveth from '../templates/Fiveth'
import Fourth from '../templates/Fourth'
import Second from '../templates/Second'
import Sixth from '../templates/Sixth'
import Third from '../templates/Third'

const index = () => {
    return (
        <div>
            <First/>
            <Second/>
            <Third/>
            <Fourth/>
            <Fiveth/>
            <Sixth/>
            <style global jsx>{`
                body{
                    margin:0;
                    padding:0;
                }
                div {
                    font-family : AppleSDGothicNeo;
                }
            `}</style>
        </div>
    )
}

export default index
