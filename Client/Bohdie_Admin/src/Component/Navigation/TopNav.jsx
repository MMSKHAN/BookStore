import React from 'react'
import { Search,Bell } from 'react-bootstrap-icons'
import pic from "../Asserts/Muhammad Saud (1).jpg"
function TopNav() {
  return (
    <div className="DashContainer">
    <div className="container">
    <div className="rowTop">
      <div className="row1">
        <div className="searchbox">
         <span> <Search/></span><span><input type="text"  placeholder='Search a transaction' /></span>
        </div>
         </div>
      <div className="row2">
        <div className="adminbox">
        <div className="notification">
          <Bell/>
          <div className="dot"></div>
        </div>
          <div className="adminimg">
            <img src={pic} alt="pixz" />
          </div>
          </div>
      </div>
    </div>
    </div>
   </div>
  )
}

export default TopNav