const express = require('express')
const router = express.Router()
const {contactCreateValidation, contactUpdateValidation} = require("../../../middleware/index")


const service= require("./contact.service");
const CONTACT_SERVER = new service

router.get("/", (req, res)=>{
    return CONTACT_SERVER.list(req, res)
})

router.post("/", contactCreateValidation, (req, res)=>{
    return CONTACT_SERVER.create(req.body, req, res)
})

router.put("/:id", contactUpdateValidation, (req, res)=>{
    return CONTACT_SERVER.update(req.params.id, req.body, req, res)
})

router.delete("/:id", async(req, res)=>{
    return CONTACT_SERVER.delete(req.params.id, req, res)
})

module.exports = router