const express = require('express')
const router = express.Router()
const {productCreateValidation,productUpdateValidation} =require("../../../middleware/index")
const multer = require('multer');
const path = require('path');
const {saveFile}=require("../../../util/File")
const upload = multer();


const service=require("./product.service")

const PRODUCT_SERVER=new service

router.get("/",(req,res)=>{
  return PRODUCT_SERVER.list(req,res)
})


router.get("/lastest",(req,res)=>{
  return PRODUCT_SERVER.getLatest(req,res)
})









module.exports=router

