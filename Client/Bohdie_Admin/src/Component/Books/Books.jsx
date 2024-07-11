import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./Books.css"
import { Pen, PlusCircle, Trash } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
function Books() {
  const [book,setBooks]=useState([])
useEffect(()=>{
  axios.get("http://localhost:300/Books").then((response)=>{
setBooks(response.data)
}).catch((e)=>{
  alert(e)
})
})
async function Delete(id){
  try {
    const response = await axios.delete(`http://localhost:300/Books/${id}`);
    console.log(response);
    alert(' Book is deleted Successfully');
  } catch (error) {
    alert('Error in Deleting Book: ' + error.message);
  }
}
  return (
    <div className="Dashboardmain">
    <div className="container-fluid">
      <div className="rowdash   " style={{display:"flex",flexDirection:"column",gap:"2rem" }} >
<NavLink to="/AddBooks" style={{color:"green",fontSize:"2rem",textAlign:"right", width:"-webkit-fill-available" }}  ><PlusCircle/>  </NavLink>

 <table  >
  <tr   >
    <th>Book Id</th>
    <th>Author</th>
    <th>Book Title</th>
    <th>Publish Year</th>
    <th>Creation time</th>
    <th>Operations</th>
  </tr>
  {
    book.map((items,id)=>{
     return(
      <tr key={id} >
      <td>{items._id}</td>
      <td>{items.author}</td>
      <td>{items.title}</td>
      <td>{items.PublishYear}</td>
      <td>{items.createdAt}</td>
      <td style={{ color:"blue" }}  > 
        <a href={`/Update Book/${items._id}`}><Pen style={{color:"red", fontSize:"1.5rem", paddingRight:"0.5rem"}}  /> </a>
          <Trash  onClick={(id)=>Delete(items._id)}   /></td>
    </tr>
     )
    })
  }
 </table>
   
   
           </div>
      </div>
        </div>
  )
}

export default Books
