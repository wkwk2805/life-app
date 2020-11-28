import React from 'react'

const Review = ({userInfo={}, text=''}) => {
    return (
        <>
            <style jsx>{`
                .rectangle {
                    margin:5vw;
                    width:35vw;
                    height:30vw;
                    border-radius:5vw 5vw 2vw 2vw;
                    box-shadow: 2vw 2vw 4vw -0.2vw rgba(0, 0, 0, 0.5);
                    padding:2vw;
                }
                .avatar {
                    width:8vw;
                    height:8vw;
                    border-radius: 50%;
                    margin:auto;
                    display:flex;
                    justify-content:center;
                    align-item:center;
                    background:#d8d8d8;
                }
                .avatar img{
                    width:5vw;
                    height:5vw;
                    margin:auto;
                }
                .user {margin:1.5vw;font-size:2vw}
                .division {height:0.5vw;width:90%;background:#d8d8d8;margin:auto}
                .text {font-size:2vw;width:85%;margin:auto;margin-top:2vw;height:13.5vw;}
                .multi-line-ellipsis {
                    overflow: hidden; 
                    text-overflow: ellipsis; 
                    display: -webkit-box;
                    -webkit-line-clamp: 5;
                    -webkit-box-orient: vertical; 
                    word-wrap:break-word;
                }
            `}</style>
            <div className="rectangle">
                <div className="avatar">
                    <img src="/images/user.png"/>
                </div>
                <div className="user">
                    {userInfo.initial}{' '}/{' '}{userInfo.gender}{' '}/{' '}{userInfo.age}대
                </div>
                <div className="division"></div>
                <div className="text multi-line-ellipsis">
                    {text}
                </div>
            </div>
        </>
    )
}

export default Review
