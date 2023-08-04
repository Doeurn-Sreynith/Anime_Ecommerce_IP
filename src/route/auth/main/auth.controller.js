const express = require('express')
const router = express.Router()
const {userRegisterValidation,check_credentail,TokenValidation,userLoginValidation} = require("../../../middleware/index")
const service=require("./auth.service");



const AUTH_SERVICE=new service;

router.post("/login",userLoginValidation,(req,res)=>{
    return AUTH_SERVICE.login(req.body,req,res)
})


router.post("/register",userRegisterValidation,check_credentail,(req,res)=>{
    return AUTH_SERVICE.register(req.body,req,res)
     
})

router.get("/me",TokenValidation,(req,res)=>{
    const user=req.user;
    delete user.password;
    return res.json(req.user)
})

router.post('/logout', (req,res)=>{
    req.session.destroy('token')
    return res.json({msg:"Logout successfull"})
})

module.exports = router