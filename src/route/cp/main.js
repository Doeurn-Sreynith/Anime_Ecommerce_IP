const express = require('express')
const router = express.Router()
const {TokenValidation}= require("../../middleware/index")


router.use("/product",TokenValidation,require("./product/product.controller"))
router.use("/category", TokenValidation,require("./category/category.controller"))
router.use("/order", TokenValidation,require("./order/order.controller"))
router.use("/order_detail", TokenValidation,require("./order_detail/order_detail.controller"))
router.use("/size", TokenValidation,require("./size/size.controller"))
router.use("/coupon", TokenValidation, require("./coupon/coupon.controller"))
router.use("/pickupOpt", TokenValidation, require("./PickupOpt/pickupOpt.controller"))
router.use("/contact",TokenValidation, require("./contact/contact.controller"))
router.use("/payment", TokenValidation, require("./payment_method/payment_method.controller"))
router.use("/address", TokenValidation, require("./address/address.controller"))


module.exports = router