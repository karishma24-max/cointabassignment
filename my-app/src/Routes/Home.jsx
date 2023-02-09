import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
const handlefetch=async ()=>{
  await axios.get("http://localhost:8080").then(res=>{if(res.data=="sorry ,data already exist"){
    alert("sorry ,Users already exist")
  }
else{
  alert("User Sucessfully Fetched")
}}).catch(e=>alert(e.message))
}
const handledelete=async()=>{
await axios.delete("http://localhost:8080/deleted").then(res=>{if(res.data.deletedCount===0){
  alert("Users do not exist").catch(e=>alert(e.message))
}
else{
  alert("Users Sucessfully Deleted")
}})
}

const Home = () => {
  return (
    <div><h1>COINTAB ASSIGNMENT</h1>
    <div><button onClick={handlefetch}>Fetch Users</button><button onClick={handledelete}>Delete Users</button><button><Link to="/users">User Details</Link></button></div></div>
  )
}

export default Home