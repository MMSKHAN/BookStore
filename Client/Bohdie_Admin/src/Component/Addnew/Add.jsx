import React from 'react'
import "./Add.css"
import pic from "../Asserts/Muhammad Saud (1).jpg";
import Pic2 from "../Asserts/travel.jpg"
import { Image,PlayBtn,GlobeCentralSouthAsia,HandThumbsUp,ChatDots } from 'react-bootstrap-icons';
function Add() {
  return (
   <>
   <div className="Add">
<div className="container">
    <div className="row">
    <div className="AddHeader">
    <div className="adminimged">
            <img src={pic} alt="pixz" />
          </div>
          <div className='AddHeaderRow' >Add New Feed</div>
    </div>
    </div>

 <div className="row d-flex ">
    <div className="Pic_video">
        
    <div className="Add_Pic"> <span><Image  className='icon_size' /></span> <span>Photo</span> </div>
    <div className="Add_Video">  <span> <PlayBtn className='icon_size' /> </span> <span> Video </span> </div>
    </div>
    </div> 

<div className="row">
    <div className="FeedName">
    <div className="adminimged">
            <img src={pic} alt="pixz" />
          </div>
          <span>Saud Khan </span>
    </div>
</div>
<div className="row">
    <div className="Globe">
        <span>Id</span>
        <span><GlobeCentralSouthAsia className='globe_Size' /></span>
    </div>
</div>


<div className="row">
    <div className="feedimge">
        <img src={Pic2} alt="feed" />
    </div>
</div>
<p className='small' >Felix and 654 like this</p>

<div className="Feed_Footer">
<div className="thumb"> <span><HandThumbsUp className='Hand_Chat_icons' /></span> <span>Like</span> </div>
<div className="comment"> <span> <ChatDots className='Hand_Chat_icons' /> </span> <span>Comments</span> </div>
</div>



    </div>
    </div>
    
   
   </>
  )
}

export default Add