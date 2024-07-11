import React from 'react'
import { Images } from 'react-bootstrap-icons'
// import img from "../Asserts/E Board.jpg"
import img2 from "../Asserts/Logo1 (2) 1.png"
import img3 from "../Asserts/scat.jpg"
import img4 from "../Asserts/swim.jpg"
function DashPart1() {
  return (
    <>
    <div className="row">
        <div className="col-sm-3  gaps ">
<div className="DashBoard"> <Images className='dashimgs' /> </div>
        <p>Add Image  </p>
        </div>
        <div className="col-sm-3  gaps ">
<div className="DashBoard"> <img src={img2} alt="board" /> </div>
        <p>Add Image  </p>
        </div>
        <div className="col-sm-3  gaps ">
<div className="DashBoard"> <img src={img3} alt="board" /> </div>
        <p>Add Image  </p>
        </div>
        <div className="col-sm-3  gaps ">
<div className="DashBoard"> <img src={img4} alt="board" /> </div>
        <p>Add Image  </p>
        </div>
    </div>
    
    </>
  )
}

export default DashPart1