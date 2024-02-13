import React, { Suspense, useState } from 'react'
import './App.css'
const Dashboard = React.lazy(() => import("./components/Dashboard"))
const Landing = React.lazy(() => import("./components/Landing"))
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'


function App() {
  return (
    <div>
      {/* suspense API */}
      <BrowserRouter>
      <AppBar/>
        <Routes>
          <Route path = "/dashboard" element={<Suspense fallback = {"Loading..."}><Dashboard/></Suspense>}/>
          <Route path = "/" element={<Suspense fallback = {"Loading..."}><Landing/></Suspense>}/>
          <Route/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

function AppBar() {
  const navigate = useNavigate();
  return(
    <div>
      <div style={{background: "black" ,color : "white"}}>
        <button onClick={() => {
        navigate("/");
        }}>Landing Pa
        ge</button>
        <button onClick={() => {
          navigate("/dashboard");
        }}>Dashboard Page</button>
      </div> 
    </div>
  )
}



export default App
