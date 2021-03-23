const express = require("express")
const mongoose = require("mongoose")
const userList = require("../Todo/routs/todo")
const app = express()

app.use(express.json())
app.use("/todo", userList)
// (async()=>{
//     //try{
//         await mongoose.connect("mongodb://localhost/todo2", {
//         useNewUrlParser: true, useUnifiedTopology: true})
//     //console.log("Connected to mongoDB")
//     // }
//     // catch(error){
//     //     console.log(error)
//     // }

mongoose.connect("mongodb://localhost/todo2",{useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{
    console.log("Connected to mongoDB")
})


app.listen(5000, () =>{
    console.log("Listening on port 5000")
})

//console.log("TEST")