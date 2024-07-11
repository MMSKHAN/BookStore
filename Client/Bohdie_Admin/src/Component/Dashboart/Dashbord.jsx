import React from 'react'
import "./Dash.css"
import { Plus } from 'react-bootstrap-icons'
import DashPart1 from './DashPart1'
import DashboardPart2 from './DashboardPart2'
function Dashbord() {
  return (
    <>
    <div className="Dashboardmain">
<div className="container-fluid">
  <div className="rowdash">
    <div className="rowDash1"> <p className='Dash_Header' >Add main Categories & pic</p> </div>
    <div className="rowDash2"> <p className='Dash_Hader_Add' > <Plus/>  <span>Add New</span> </p> </div>
  </div>
  <DashPart1/>
  <DashboardPart2/>
</div>
    </div>
    
    </>
  )
}

export default Dashbord