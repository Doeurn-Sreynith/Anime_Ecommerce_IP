const express = require('express')
const router = express.Router()
const {paymentCreateValidation, paymentUpdateValidation} = require("../../../middleware/index")

const service = require("./payment_method.service");

const PAYMENT_SERVER = new service

router.get("/", (req, res)=>{
    return PAYMENT_SERVER.list(req, res)
})

router.post("/", paymentCreateValidation, (req, res)=>{
    return PAYMENT_SERVER.create(req.body, req, res)
})

router.put("/:id", paymentUpdateValidation, (req, res)=>{
    return PAYMENT_SERVER.update(req.params.id, req.body, req, res)
})

router.delete("/:id", paymentUpdateValidation, (req, res)=>{
    return PAYMENT_SERVER.delete(req.params.id, req, res)
})

module.exports = router