import React from 'react'
import SmallBtn from './SmallBtn'
import MainTop from './MainTop';

const Background1 = () => {
    return (
        <>
            <style jsx>{`
              div {display:flex;flex-direction:column;}
              .container {flex-direction:column;width: 100%;}
              .main {flex-grow:1;flex-direction:row;}
              .bottom {flex-direction:row;justify-content: center;}
            `}</style>
            <div className="container">
                <div className="main">
                    <MainTop />
                </div>
                <div className="bottom">
                    <SmallBtn active/>
                    <SmallBtn />
                </div>
            </div>
        </>
    )
}

export default Background1
