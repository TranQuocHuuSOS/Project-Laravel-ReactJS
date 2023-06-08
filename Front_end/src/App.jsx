import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import {BrowserRouter as Router ,Routes,Route,useNavigationType,useLocation,} from "react-router-dom";
// import Header from './component/Pages/User/Header';
// import Footer from './component/Pages/User/Footer';
// import Home from './component/Pages/User/Home';
// import Sign_in from './component/Pages/Account/Sign_in';
// import Sign_up from './component/Pages/Account/Sign_up';
// import Dashboard from './component/Pages/Admin/Dashboard';



import Dashboard from './component/Pages/Admin/Dashboard'
function App() {
  return (
    <div className='containers'>
     
        {/* <Header></Header>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Sign_in" element={<Sign_in/>} />
          <Route path="/Sign_up" element={<Sign_up/>} />
        </Routes>
        <Footer></Footer> */}

        <Dashboard></Dashboard>
    </div>
  )
}
export default App
