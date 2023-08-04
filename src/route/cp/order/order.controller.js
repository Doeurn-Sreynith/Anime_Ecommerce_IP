const express = require('express')
const router = express.Router()
const multer = require('multer');
const upload = multer()
const {orderCreateValidation, orderUpdateValidation} = require("../../../middleware/index")


const service = require("./order.service");
const ORDER_SERVICE = new service

router.get("/", (req, res)=>{
    return ORDER_SERVICE.list(req, res)
})

router.post("/", orderCreateValidation, (req, res)=>{
    return ORDER_SERVICE.create(req.body, req, res)
})

router.put("/:id", orderUpdateValidation, (req, res)=>{
    return ORDER_SERVICE.update(req.params.id, req.body, req, res)

})

router.delete("/:id", async(req, res)=>{
    return ORDER_SERVICE.delete(req.params.id, req, res)
})

module.exports = router