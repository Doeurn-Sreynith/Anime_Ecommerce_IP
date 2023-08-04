const express = require('express')
const router = express.Router()

router.use("/auth",require("./route/auth/main/auth.controller"))
router.use("/cp",require("./route/cp/main"))
router.use("/main",require("./route/main/main"))

module.exports = router