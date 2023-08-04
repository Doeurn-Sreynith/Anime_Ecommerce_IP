const { PrismaClient }=  require( '@prisma/client')
const prisma = new PrismaClient() 

module.exports =async ()=>{
    await prisma.role.deleteMany({})


    await prisma.role.createMany({
        data:[
            {id:1,name:"Admin",kh_name:"អភិបាល"},
            {id:2, name:"Customer", kh_name:"អតិថិជន"}
        ]
    })

    console.log("\x1b[32m","--------- Role Seeding Successful ---------\n","\x1b[0m");
}