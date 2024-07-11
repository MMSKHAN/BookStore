import { Boxes,Person,PlusCircle } from "react-bootstrap-icons"
const NavArray=[
    {
    name:"Dashboard",
    to:"/",
    icon:<Boxes/>
},
    {
    name:"Books",
    to:"/Books",
    icon:<Person/>
},
//     {
//     name:"Add Book",
//     to:"/AddBooks",
//     icon:<PlusCircle/>
// },
//     {
//     name:"Update Data",
//     to:"/Update Book/:id",
//     icon:<PlusCircle/>
// },
    {
    name:"Add New Feed",
    to:"/Add",
    icon:<PlusCircle/>
},
  
]
export default NavArray