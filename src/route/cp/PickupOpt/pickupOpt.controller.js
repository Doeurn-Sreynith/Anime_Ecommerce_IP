const express = require('express')
const router = express.Router()
const {pickupOptCreateValidation, pickupOptUpdateValidation} = require("../../../middleware/index")

const service= require("./pickupOpt.service");
const PICKUPOPT_SERVER  = new service

router.get("/", (req, res)=>{
    return  PICKUPOPT_SERVER.list(req, res)
})

router.post("/", pickupOptCreateValidation, (req, res)=>{
    return  PICKUPOPT_SERVER.create(req.body, req, res)
})

router.put("/:id",  pickupOptUpdateValidation, (req, res)=>{
    return  PICKUPOPT_SERVER.update(req.params.id, req.body, req, res)
})

router.delete("/:id", async(req, res)=>{
    return  PICKUPOPT_SERVER.delete(req.params.id, req, res)
})

module.exports = router