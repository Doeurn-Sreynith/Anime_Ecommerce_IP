const express = require('express')
const router = express.Router()
const {TokenValidation}= require("../../middleware/index")


router.use("/product",require("./product/product.controller"))


module.exports = router