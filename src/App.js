import "./App.css";

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"

import Navbar from "./components/Navbar"
import { Route, Routes} from "react-router-dom";
import { useState } from 'react'



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
   <div>
  
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

    <Routes>

    
      <Route path="/login" element ={<Login/>} />
      <Route path="/Signup" element ={<Signup/>} />

      <Route path="/Dashboard" element ={<Dashboard/>} />
    





    </Routes>
    
   </div>
  

  );
}

export default App;
