const express = require('express')
const router = express.Router()
const {categoryCreateValidation, categoryUpdateValidation} = require("../../../middleware/index")


const service = require("./category.service");

const CATEGORY_SERVER = new service

router.get("/", (req,res) =>{
    return CATEGORY_SERVER.list(req, res)
})

router.post("/", categoryCreateValidation, (req,res)=>{
    
    return CATEGORY_SERVER.create(req.body, req, res)
})

router.put("/:id", categoryUpdateValidation, (req, res)=>{
    return CATEGORY_SERVER.update(req.params.id, req.body, req, res)
})
// router.post("/",categoryCreateValidation, async(req,res) => {
//     req.body.user = req.user_id
//     return CATEGORY_SERVER.create(req.body,req,res)
// })

// router.put("/:id", categoryUpdateValidation, async(req, res) => {
//     return CATEGORY_SERVER.update(req.params.id, req.body, req, res)
// })

router.delete("/:id", async (req,res) => {
    return CATEGORY_SERVER.delete(req.params.id, req, res)
})



module.exports = router