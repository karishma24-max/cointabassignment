import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Userinfo from '../Components/Userinfo'

const Userdetail = () => {
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    const [gender,setgender]=useState("")
    const [age,setAge]=useState("")
    useEffect(()=>{
        axios.get(`https://gorgeous-bathing-suit.cyclic.app/userdetail?page=${page}&limit=10&gender=${gender}&age=${age}`).then(res=>setData(res.data))
    },[page,gender,age])
    const coloumn=[
        {heading:"Picture"},
        {heading:"Name"},
        {heading:"Email"},
        {heading:"Gender"},
        {heading:"Age"}
]
  return (
    <div>
      <h1>USERS INFORMATION</h1>
<select onChange={(e)=>setgender(e.target.value)}>
<option>Filter by gender</option>
<option value="male">Male</option>
<option value="female">Female</option></select>
<select onChange={(e)=>setAge(e.target.value)}><option>Filter by Age</option>
<option value="greater">Age greater than 50</option>
<option value="lesser">Age lesser than 50</option></select>
     <Userinfo data={data} coloumn={coloumn}/>
     <button disabled={page===1? true: false}onClick={()=>setPage(page-1)}>Prev</button>{page}<button disabled={page===5? true: false} onClick={()=>setPage(page+1)}>Next</button>
     </div>
  )
}

export default Userdetail