const express = require('express')
const router = express.Router()
const {couponCreateValidation, couponUpdateValidation} = require("../../../middleware/index")

const service= require("./coupon.service");
const COUPON_SERVER = new service

router.get("/", (req, res)=>{
    return COUPON_SERVER.list(req, res)
})

router.post("/", couponCreateValidation, (req, res)=>{
    return COUPON_SERVER.create(req.body, req, res)
})

router.put("/:id", couponUpdateValidation, (req, res)=>{
    return COUPON_SERVER.update(req.params.id, req.body, req, res)
})

router.delete("/:id", async(req, res)=>{
    return COUPON_SERVER.delete(req.params.id, req, res)
})

module.exports = router