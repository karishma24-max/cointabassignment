import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Userdetail from './Routes/Userdetail'

const Allroutes = () => {
  return (
    <div><Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Userdetail/>}/>
    </Routes></div>
  )
}

export default Allroutes