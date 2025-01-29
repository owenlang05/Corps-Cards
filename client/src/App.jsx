import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import Navigation from './components/Navbar';

function App() {
  
  return (
    <>
        <Navigation/>
        <Outlet/>
    </>

    
  )
}



export default App
