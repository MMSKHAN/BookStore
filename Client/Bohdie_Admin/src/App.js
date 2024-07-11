import React from 'react'
import Nav from './Component/Navigation/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Books from './Component/Books/Books';
import Logout from './Component/Logout/Logout';
import AddBook from './Component/AddBook/AddBook';
import UpdateBook from './Component/UpdateBook/UpdateBook';
import Dashbord from './Component/Dashboart/Dashbord';
import TopNav from './Component/Navigation/TopNav';
import Add from './Component/Addnew/Add';
import "./App.css"
function App() {
  return (
    <BrowserRouter>
   <div className="classes">
     < Nav />
    <TopNav/></div>
    <Routes>
     <Route exect path="/"element={< Dashbord />}/>
     <Route exect path="/Books"element={< Books />}/>
     <Route exect path="/Update Book/:id"element={< UpdateBook />}/>
     <Route exect path="/AddBooks"element={< AddBook />}/>
     <Route exect path="/Logout"element={< Logout />}/>
     <Route exect path="/Add"element={< Add />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App