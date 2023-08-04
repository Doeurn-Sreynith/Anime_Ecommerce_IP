const bcrypt =require("bcrypt")
const { PrismaClient }=  require( '@prisma/client')
const prisma = new PrismaClient() 



module.exports =async ()=>{
    const salt=await bcrypt.genSalt(10)
    const hashPassword=await bcrypt.hash("123456",salt)

    await prisma.users.deleteMany({})


    await prisma.users.createMany({
        data:[
            {id:1,username:"Admin",firstname:"Admin",lastname:"Admin",genderid:1,roleid:1,password:hashPassword,email:"example@example.com"},
            {id:2,username:"sreynith",firstname:"srey",lastname:"nith",genderid:2,roleid:2,password:hashPassword,email:"example@example.com"},
        ]
    })

    console.log("\x1b[32m","--------- User Seeding Successful ---------\n","\x1b[0m");
}