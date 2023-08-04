const express = require('express')
const router = express.Router()
const {addressCreateValidation, addressUpdateValidation} = require("../../../middleware/index")

const service = require("./address.service");
const ADDRESS_SERVER = new service

router.get("/", (req, res)=>{
    return ADDRESS_SERVER.list(req, res)
})

router.post("/", addressCreateValidation, (req, res)=>{
    return ADDRESS_SERVER.create(req.body, req, res)
})

router.put("/:id", addressUpdateValidation, (req, res)=>{
    return ADDRESS_SERVER.update(req.params.id, req.body, req, res)
})

router.delete("/:id", addressUpdateValidation, (req, res)=>{
    ADDRESS_SERVER.delete(req.params.id, req, res)
})

module.exports = router