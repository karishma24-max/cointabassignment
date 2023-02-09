const mongoose = require("mongoose")

require("dotenv").config()
const connect = async()=>{
    return mongoose.connect("mongodb+srv://karishma:chauhan@cluster0.3ooyrzl.mongodb.net/user?retryWrites=true&w=majority")
}
module.exports=connect