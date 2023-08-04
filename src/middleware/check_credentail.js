const { PrismaClient }=  require( '@prisma/client')
const prisma = new PrismaClient() 
async function  check_credentail(req,res,next){
    const data=req.body;
    let user=await prisma.users.findFirst({
        where:{
            username:data.username
        }
    })
    if(user) return res.status(400).send({"msg":"Credentail already taken"})
    user=await prisma.users.findFirst({
        where:{
            username:data.username,
            email:data.email
        }
    })

    if(user) return res.status(400).send({"msg":"Credentail already taken"})
    next()
}
module.exports=check_credentail