const express = require('express')
const router = express.Router()
const {sizeCreateValidation, sizeUpdateValidation} = require("../../../middleware/index")
const multer = require('multer');
const path = require('path');
const {saveFile}=require("../../../util/File")
const upload = multer();

const service = require("./size.service");
const SIZE_SERVER = new service

router.get("/", (req,res)=>{
    return SIZE_SERVER.list(req, res)
})


router.post("/", upload.single('file'), sizeCreateValidation, async (req, res)=>{
    if(req.file){
        const fileBuffer = req.file.buffer;
        const fileExtension = path.extname(req.file.originalname);
        imagePath = saveFile(fileBuffer, fileExtension, "static/size")
        req.body.imagePath = imagePath;
    }
    req.body.user = req.user
    return SIZE_SERVER.create(req.body, req, res)
    // 
})

router.put("/:id", upload.single('file'), sizeUpdateValidation, async (req, res)=>{
    let imagePath = null;
    if(req.file){
        const fileBuffer = req.file.buffer;
        const fileExtension = path.extname(req.file.originalname);

        imagePath = saveFile(fileBuffer, fileExtension, "static/size")
    }
     return SIZE_SERVER.update(req.params.id, req.body, req, res)
})

router.delete("/:id", async(req, res)=>{
    return SIZE_SERVER.delete(req.params.id, req, res)
})



module.exports = router