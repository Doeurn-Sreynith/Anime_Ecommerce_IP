
const { PrismaClient }=  require( '@prisma/client')
const prisma = new PrismaClient() 


module.exports=class product{
    async list(req, res){
        return res.json(await prisma.product.findMany({
            include: {
                order_details:true,
                sizes:true,
                category: true
            }
        }))
    }
    async getLatest(req,res){
        return res.json(await prisma.product.findMany({
            include: {
                order_details:true,
                sizes:true,
                category: true
            },
            orderBy: {
                created:'desc',
            },
            take:6
        }))
    }

    
   
}