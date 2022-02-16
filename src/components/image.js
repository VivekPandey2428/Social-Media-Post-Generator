import React from "react";
export default function Image({data,setImage,imgUrl}){
  return (
          <img type='gif'onClick={(id)=>setImage(data)} className="img-hw" src={imgUrl} alt="loading..."/>
  )
}
