require("dotenv").config();
const express = require('express');
const connect = require("./Config/db.js");
const server = express();
const cors = require('cors');
const { default: axios } = require("axios");
server.use(express.json());
server.use(cors());
const User=require("./user/user.modal")





server.get("/",async (req,res)=>{
    let responseji= await axios.get("https://randomuser.me/api/?results=50")
    let data = responseji.data.results
let result= await User.find()
console.log(result)
if(result.length>0)
{
    res.send("sorry ,data already exist")
}
else{
    let user= User.insertMany(data)
      res.send(data)
}
   
})

server.delete("/deleted",async(req,res)=>{
let data= await User.remove()

    res.send(data)


})

server.get("/userdetail",async(req,res)=>{
    const {page,limit,gender,age}=req.query
    console.log(gender)
    console.log(page*4)
    const skip=(page-1)*10
    //console.log(age*7)
    console.log(age)
    
     if(gender &&age)
    {
        if(age=="greater")
        {
    var data=await User.find({gender:gender,"dob.age":{$gt:50}}).skip(skip).limit(limit)
        }
        else
        {
            var data=await User.find({gender:gender,"dob.age":{$lt:50}}).skip(skip).limit(limit)    
        }
    }
    else if(age)
    {
       
        if(age=="greater")
        {
    var data=await User.find({"dob.age":{$gt:50}}).skip(skip).limit(limit)
        }
        else
        {
            var data=await User.find({"dob.age":{$lt:50}}).skip(skip).limit(limit)    
        } 
    }
    else if(gender)
    {
        var data=await User.find({gender:gender}).skip(skip).limit(limit)  
    }
    else
    {
        var data=await User.find().skip(skip).limit(limit)   
    }
    
    //console.log(dataji)
    res.send(data)
})

server.listen(8080,async(req,res)=>{
   try{
    await connect();
    console.log(`Database connected`)
   }
   catch(e){
    console.log(e)
   }
   console.log(`server listening at port ${8080}`)
});