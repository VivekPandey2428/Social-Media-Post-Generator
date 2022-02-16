import React,{useState} from "react";
import './post.css';
import Gif from "./Gif";
export default function Post({dataretrieve}){
    const [text,setText]=useState('');
    function handleChange(event){
        setText(event.target.value);
    }
    const [gifactive,setgifactive]=useState(false);
    function activateGif(){
        setgifactive(true);
    }
    const [clickedImage,setclickedImage]=useState('');
    function getclickedImage(data){
        console.log(data);
        setclickedImage(data);
        setgifactive(false);
    }
    function handleSubmit(event){
        event.preventDefault();
        dataretrieve(text,clickedImage)
        setText('');
        setclickedImage('');

    }
    return(
        <div className="post-block">
            <div className="heading">
                <p className="text-style">Compose Post</p>
                <p>|</p>
                <p className="text-style">Photo/Video Album</p>
                <p>|</p>
                <p className="text-style">Live Video</p>
            </div>
            <div className="post-content">
                <textarea onChange={handleChange} value={text} rows={3} className="Enter-text" type="text" placeholder="Write Something Here"/>
            </div>
            {clickedImage && <div className="dispaly_gif">
            <img src={clickedImage.images.fixed_height.url} />
            </div>}
             <div className="to_flex_data">
                 <div className="further-content">
                     <p>Tag Friends</p>
                 </div>
                 <div className="further-content">
                     <p>Check In</p>
                 </div>
                 <div onClick={activateGif} className="further-content">
                     <p>GIF</p>
                 </div>
                 {gifactive &&  
                     <div className="gif-absolute">
                     <Gif getclickedImage={(data)=>getclickedImage(data)}/>
                     </div>}
                 <div className="further-content">
                     <p>Tag Event</p>
                 </div>
             </div>
             <form onSubmit={handleSubmit}>
             <div className="final-post">
                 <button className="btn-view" type="button">Only me</button>
                 <button className="btn-post" type="submit">Post</button>
             </div>
            </form>
        </div>
    )
}