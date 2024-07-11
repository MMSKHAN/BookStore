import React from 'react'
import { ChevronDown,ChevronUp, Plus } from 'react-bootstrap-icons'
function DashboardPart2() {
  return (
    <div className="row">
        <div className="col-sm-6">
             <div className="boxhead"> <span>Manufacturer</span>  <span><ChevronDown/></span> </div>
             <div className="boxbody mt-2">
<p className='manufac' > <span>Manufacturer</span> <span><ChevronUp/></span>   </p>
<p className='manufac2' > <span> Evolve </span> <span><ChevronDown/></span>   </p>
<p className='manufac2' > <span>Meepo </span> <span><ChevronDown/></span>   </p>
<p className='manufac2' > <span>Backfire</span> <span><ChevronDown/></span>   </p>
<p className='manufac2' > <span>Bustin Boards </span> <span><ChevronDown/></span>   </p>
<p className='manufac2' > <span>Onsra </span> <span><ChevronDown/></span>   </p>
<p className='manufac2' > <span>Onewheel </span> <span><ChevronDown/></span>   </p>
<p className='manufac2' > <span>Lacroix </span> <span><ChevronDown/></span>   </p>
<div className="Dash_Butttons">
    <div className="Dash_button1"> <span> <Plus className='plus '/> </span> <span>Add New Categore</span> </div>
    <div className="Dash_button2"> <span> <Plus className='plus'/> </span> <span> Add picture </span> </div>
</div>
             </div>
          </div>

          <div className="col-sm-6">
             <div className="boxhead"> <span>Manufacturer</span>  <span><ChevronDown/></span> </div>
             <div className="boxbody mt-2">
<p className='manufac' > <span>Manufacturer</span> <span><ChevronUp/></span>   </p>
<p className='manufac2' > <span> Evolve </span> <span><ChevronDown/></span>   </p>
<p className='manufac2' > <span>Meepo </span> <span><ChevronDown/></span>   </p>
<p className='manufac2' > <span>Backfire</span> <span><ChevronDown/></span>   </p>
<p className='manufac2' > <span>Bustin Boards </span> <span><ChevronDown/></span>   </p>
<p className='manufac2' > <span>Onsra </span> <span><ChevronDown/></span>   </p>
<p className='manufac2' > <span>Onewheel </span> <span><ChevronDown/></span>   </p>
<p className='manufac2' > <span>Lacroix </span> <span><ChevronDown/></span>   </p>
<div className="Dash_Butttons">
    <div className="Dash_button1"> <span> <Plus className='plus' /> </span> <span>Add New Categore</span> </div>
    <div className="Dash_button2"> <span> <Plus className='plus' /> </span> <span> Add picture </span> </div>
</div>
             </div>
          </div>
          </div>
       
  )
}

export default DashboardPart2