const express = require('express')
const router = express.Router()
const {order_detailCreateValidation, order_detailUpdateValidation} = require("../../../middleware/index")

const service = require("../order_detail/order_detail.service");

const ORDER_DETAIL_SERVER = new service

router.get("/", (req, res) =>{
    return ORDER_DETAIL_SERVER.list(req, res)
})

router.post("/", order_detailCreateValidation, (req, res)=>{
    return ORDER_DETAIL_SERVER.create(req.body, req, res)
})

router.put("/:id", order_detailUpdateValidation, (req, res)=>{
    return ORDER_DETAIL_SERVER.update(req.params.id, req.body, req, res)
})

router.delete("/:id", async(req, res)=>{
    return ORDER_DETAIL_SERVER.delete(req.params.id, req, res)
})

module.exports = router