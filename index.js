require("dotenv").config();
const express= require('express')
const path = require('path');
const app=express()
const cors= require("cors")
app.use(express.json())


app.use("/static",express.static(path.join(__dirname, 'static')));
app.use(require("./src/config/seession"))

app.use(cors(['*']))

app.get('/',(req,res)=>{
    res.json({
        msg:"It work"
    })
})


app.use("/api",require("./src/main"))

require("./src/config/db")()



app.listen(process.env.PORT ?? 3000,()=>{
    console.log(`Server run on http://localhost:${process.env.PORT ?? 3000}`);
})