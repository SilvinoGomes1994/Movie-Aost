import {Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'

import './App.css'


function App() {
 

  return (
    <>
      <div className="App">
        <Navbar />
        <h2>Movies Aost</h2>
        <Outlet />
      </div>
      
    </>
  )
}

export default App
