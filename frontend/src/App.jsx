
import React,{useContext} from 'react'
import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Home from './pages/home.jsx'
import { userDataContext } from './context/userContext.jsx'
import { Navigate } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

function App() {
  const {userData} = useContext(userDataContext);
  return (
    <>
    <Toaster />
   <Routes>
        <Route 
           path="/" 
           element={userData ? <Home /> : <Navigate to="/signin" />} 
        />
        <Route 
           path="/signin" 
           element={!userData ? <SignIn /> : <Navigate to="/" />} 
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

  
    </>
  )
}

export default App