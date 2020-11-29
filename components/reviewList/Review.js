import React from 'react'

const Review = ({userInfo={}, text=''}) => {
    return (
        <>
            <div className="rectangle">
                <div className="avatar">
                    <img src="/images/user.png"/>
                </div>
                <div className="user">
                    {userInfo.initial}{' '}/{' '}{userInfo.gender}{' '}/{' '}{userInfo.age}대
                </div>
                <div className="review-division"></div>
                <div className="review-sub-text multi-line-ellipsis">
                    {text}
                </div>
            </div>
        </>
    )
}

export default Review
