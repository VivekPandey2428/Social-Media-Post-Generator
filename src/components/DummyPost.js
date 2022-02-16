import React, { useEffect, useState } from "react";
import './DummyPost.css'

function AddedPost({data}){
    return(
        <div className="text-section">
            <div className="upper-section">
                <img className="round-profile" src='https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg' alt="profile-pic"/>
                <div className="margin0">
                    <h3 className="value">User</h3>
                    <p>Updated on Feb 2022</p>
                </div>
            </div>
            <p className="caption">{data.text}</p>
            <div className="img-capture">
            <img src={data.imgUrl}/>
            </div>
        </div>
    )
}
export default function DummyPost({userPostData}){
    console.log('post',userPostData[0]);
    const [postData,setPostData]=useState(userPostData[0]);
    console.log(postData);
    // useEffect(()=>{
    //     setPostData([userPostData][0]);
    // },[userPostData])
    return (
        <div className="Post-data">
            {postData[0].map(data=>{
                return (
                   <AddedPost key={data.id} data={data}/>
                )
            })}
        </div>
    )
}