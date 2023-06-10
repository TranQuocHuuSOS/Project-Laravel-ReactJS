import { useState } from 'react'
import {BrowserRouter as Router ,Routes,Route,useNavigationType,useLocation,} from "react-router-dom";
import Dashboard from './component/Common/Dashboard'
import List_apartment from './view/Admin/List_apartment';
import List_seeder from './view/Admin/List_seeder';
import List_user from './view/Admin/List_user';
function App_admin() {
  return (
    <div className='containers'>
        <Dashboard> </Dashboard>
        <Routes>
            <Route path="/List_apartment" element={<List_apartment/>} />
            <Route path="/List_seeder" element={<List_seeder/>} />
            <Route path="/List_user" element={<List_user/>} />
        </Routes> 
              
    </div>
  )
}
export default App_admin;