const express = require("express")
const router = express.Router()
const List = require("../models/todoSchema") 


router.get("/", async (req, res) => {
    const items = await List.getAll() // حرتجع اللي بترجعه (find) اللي عاملينها في السكيما
    res.json(items) // لحد دلوقتي حيرجع أرراي فاضية عشان انا معنديش حاجة في الداتابيز
    // res.status(200).send("<h1>You are connected!</h1>")

})

router.get("/:id", async(req, res) =>{
    const item = await List.getOne(+req.params.id) //Done
    res.json(item)
})
router.post("/", async(req, res) =>{
    const item = await List.add(req.body)  // Done
    res.json(item)
})

router.delete("/:id", async(req, res) =>{
    
        const item = await List.getOne(+req.params.id)  //Done
        await List.remove(req.params.id)
        res.json(item)
   
})

router.put("/:id", async(req, res) =>{
    const item = await List.edit(+req.params.id, req.body)
    res.json(item)

})

module.exports = router