import './App.css';
import React, { useState,useEffect, useContext } from 'react';
import Post from './components/Post';
import DummyPost from './components/DummyPost';
const data=[
  {
      id:1,
      imgUrl:'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg',
      text:'Lost in the Mountain'
  },
  {
     id:2,
     imgUrl:'https://thumbs.dreamstime.com/b/sunrise-over-beach-cancun-beautiful-mexico-40065727.jpg',
     text:'Lost in the Beaches'
  }
]
function App() {
  let [userPostData,setuserPostData]=useState([data]);
  let cnt=3;
   console.log(data);
  //  useEffect(()=>{
  //    setuserPostData(data)
  //  },[userPostData])
   function dataretrieve(text,value){
     const tempvalue={
       id:++cnt,
       imgUrl:value.images.fixed_height.url,
       text:text
     }
     data.unshift(tempvalue);
     console.log([tempvalue]);
     setuserPostData(...userPostData,[tempvalue]);

     console.log('data',userPostData);
   }
   console.log('user',userPostData)//3
  return (
    <div className="App">
      <Post dataretrieve={(text,value)=>dataretrieve(text,value)}/> 
      <DummyPost userPostData={[userPostData]}/>
    </div>
  );
}
export default App;
