
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

    async create(data, req, res){
        try {
            // console.log(data.categoryid);
            const n_product=await prisma.$queryRaw`SELECT COALESCE(MAX(id), 0) + 1 AS next_id FROM product;`
    
            data.pid=`PRO${Number(n_product[0].next_id)}`;
            const saveProduct = await prisma.product.create({
                data: {
                    pid: data.pid,
                    name: data.name,
                    price: data.price,
                    cid: data.categoryid,
                    image: data.imagePath,
                },


            })
            return res.json ({
                product: saveProduct,
                msg: "Create Successful"
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg: "Internal Server error"})
        }
    }

    async update (id, data,imagePath, req, res){
        try {
            const updateProduct = await prisma.product.update({
                where: {
                    id: Number(id)
                },
                data: {
                    name: data.name,
                    price: data.price,
                    image: imagePath
                }

            })
            return res.json ({
                user: updateProduct,
                msg: "Update Successful"
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg: "Internal Server error"})
        }
    }

    async delete(id, req, res){
        try {
            return res.json({
                data: await prisma.product.delete({
                    where:{
                        id:Number(id)
                    }
                }),
                msg: "Delete Product Successful"
            })
        } catch (error) {
            
            return res.status(500).json({msg: "Internal Server error"})
        }
    }
   
}