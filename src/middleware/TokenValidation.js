const jwt = require('jsonwebtoken');
const { PrismaClient }=  require( '@prisma/client')
const prisma = new PrismaClient() 

require("dotenv").config();
module.exports =async function (req, res, next) {

    let token = req.session.token;
    // console.log(token);
    if(!token) token=req.header('Authorization');
    if(token) token=token.split(" ")[1]
    // console.log(token);
    
    if (!token) {        
        return res.status(401).json({
            msg:'Invalid Token',
        });
    }
    // console.log(token);
    
    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        // console.log(verified.id);
        
        if (verified) {
            const user=await prisma.users.findFirst({
                where:{
                    id:verified.id
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
            });
            delete user.password;
            if(!user){
                return res.status(401).json({
                    msg:'Unauthorized user',
                });
            }
            req.user = user;
                next();

        }
    } catch (err) {
        return res.status(402).json({
            msg:'Invalid Token',
        });
    }
};

