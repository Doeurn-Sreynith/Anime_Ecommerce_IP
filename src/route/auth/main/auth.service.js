
const bcrypt =require("bcrypt")
const jwt = require('jsonwebtoken');
const { PrismaClient }=  require( '@prisma/client')
const prisma = new PrismaClient() 

module.exports=class auth{
    async register(data,req,res){
        // console.log(data);
        
        
        if(data.password!=data.repeat_password) return res.status(400).json({msg:"Password and repeate password not match"})
        const salt=await bcrypt.genSalt(10)
        const hashPassword=await bcrypt.hash(data.password,salt)
        data.password=hashPassword

        try{
            const savedUser=await prisma.users.create({
                data:{
                    firstname:data.firstname,
                    lastname:data.lastname,
                    username:data.username,
                    password:data.password,
                    tel:data.tel,
                    email:data.email,
                    genderid:data.genderid,
                    roleid:2,
                    dob:new Date(data.dob).toISOString()
                },
                include:{
                    gender:true,
                    role:true
                }
            })
            const token=this.generateGToken({id:savedUser._id})
            req.session.token =`Bearer ${token}`
            delete savedUser.password;
            return res.json( {
                token:token,
                user:savedUser,
                msg:"Register successfull"
            })
        }catch(err){
            console.log(err);
            return res.status(500).json({msg:"Internal server error"})
        }
        
    }
    
    async login(data,req,res){
        let user=await prisma.users.findFirst({
            where:{
                username:data.EUID
            },
            include:{
                gender:{
                    select:{
                        name:true,
                    },
                },
                role:{
                    select:{
                        name:true,
                    }
                }
            }
        })
        if(!user) user=await prisma.users.findFirst({
            where:{
                email:data.EUID
            },
            include:{
                gender:{
                    select:{
                        name:true,
                    }
                },
                role:{
                    select:{
                        name:true,
                    }
                }
            }
        })
        if(!user) return res.status(400).send({"message":"Email or Password invalid"})
        // delete user.password;
        
        const token=this.generateGToken({id:user.id})

        req.session.token=`Bearer ${token}`
        delete user.password
        return res.json( {
            token:token,
            user:user,
            msg:"Login successfull"
        })
    }
    
    
     generateGToken(obj){
        return jwt.sign(obj,process.env.ACCESS_TOKEN_SECRET)
    }
    
}