const express = require("express")
const mongoose = require("mongoose")
//schema
const schema = new mongoose.Schema({
    id: Number,
    title: String,
    body: String,
})

// creating object with model for the object which will treate with the schema حنديله اسم الموديل والسكيما بتاعته
// user is the object هو اللي حيخليني اكلم الداتابيز ويرد عليا بالداتابيز
const List = mongoose.model("List", schema)

const getAll = () =>{
    return List.find() // it will return Promis, we will deal with it in the routs with async & await
}
const getOne = (id) =>{
    return List.findOne({"id": id}) // Same treatment //##############_id
}
const add = (item) =>{
    return new List(item).save()
}
const remove = (id) =>{
    return List.deleteOne({"id": id}) // نفس الكلام اللي تحت ↓ ده 
}
const edit = (id, item) =>{
    return List.updateOne({"id": id}, item) // ده عبارة عن فلتر بيروح الداتابيز يدور على الكي ويقارنها بالفاليو، 
                                    // it will edit the record which its _id = the id entered by the user and the user will add another new updated user data
    
    
}




module.exports = List
module.exports = {getOne, getAll, add, remove, edit}