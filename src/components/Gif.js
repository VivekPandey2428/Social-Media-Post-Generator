import React,{useState} from "react";
import Image from "./image";
import './Gif.css'
const baseUrl='https://api.giphy.com/v1/gifs/search?api_key=9QI8ebJTOpkK7FWEPhfweREMpxIwmgRH&q=';
export default function Gif({getclickedImage}){
  const [gifdata,setgifdata]=useState([]);
  // const [imgurl,setimgurl]=useState();
  const [clicked,setclicked]=useState(false);
  const [search,setsearch]=useState('');
  const[selectedImageactive,setselectedImageactive]=useState(false);
  function handleChange(event){
    setsearch(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    if(search.length>0){
        setclicked(true);
        fetch(baseUrl+search).
        then((res)=>{
            return res.json();
        })
        .then((result)=>{
            console.log(result.data);
            setgifdata(result.data.map((gif)=>{
                return gif;
            }))
        })
        .catch(()=>{
            alert('Something Went Wrong');
            setclicked(false);
        })
    }
  }
  function setImage(id){
      console.log(id);
      getclickedImage(id);
      setselectedImageactive(true);
  }
    return (
      <div className="container-gifs">  
       <div className='search-input'>
        <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleChange} />
        <button>Search Gifs</button>
        </form>
      </div>
      {clicked && <div className='searchResult'>
        {gifdata.map(url=>{
          return (
              <Image data={url} setImage={(id)=>setImage(id)} key={url.id} imgUrl={url.images.fixed_height.url}/>
          )
        })}
      </div> }
      </div>
    )
}