const { PrismaClient }=  require( '@prisma/client')
const prisma = new PrismaClient() 

module.exports =async ()=>{
    await prisma.gender.deleteMany({})


    await prisma.gender.createMany({
        data:[
            { id:1,name:"Male",kh_name:"ប្រុស" },
            { id:2,name:"Female",kh_name:"ស្រី" }
        ]
    })

    console.log("\x1b[32m","-------- Gender Seeding Successful --------\n","\x1b[0m");
}