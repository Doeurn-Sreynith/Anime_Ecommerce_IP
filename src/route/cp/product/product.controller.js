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

router.post("/",upload.single('file'),productCreateValidation,async (req,res)=>{
  if(req.file){
    const fileBuffer = req.file.buffer;
    const fileExtension = path.extname(req.file.originalname);
    // console.log(fileExtension);
    imagePath=saveFile(fileBuffer,fileExtension,"static/product")
    req.body.imagePath=imagePath;
  }
  req.body.user=req.user
  return PRODUCT_SERVER.create(req.body,req,res)
})


router.put("/:id",upload.single('file'),productUpdateValidation,async (req,res)=>{
  let imagePath=null;
  if(req.file){
    const fileBuffer = req.file.buffer;
    const fileExtension = path.extname(req.file.originalname);
    // console.log(fileExtension);
    imagePath=saveFile(fileBuffer,fileExtension,"static/product")
    
  }
  // return res.json( imagePath);
  return PRODUCT_SERVER.update(req.params.id,req.body,imagePath,req,res)
})

router.delete("/:id", async (req,res)=>{
  return PRODUCT_SERVER.delete(req.params.id, req, res)
})








module.exports=router

