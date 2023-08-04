const { PrismaClient }=  require( '@prisma/client')
const prisma = new PrismaClient() 


module.exports = class category{
    async list(req, res){
       return  res.json(await prisma.category.findMany({
            include:{
                products:true
            }
        }))
    }
 

    async create(data, req, res){
        
        try {
            const n_category=await prisma.category.count()
            data.cid=`CAT${n_category+1}`;
            const savedCategory = await prisma.category.create({
                data: {
                    name: data.name,
                    cid: data.cid
                },
               
            })
            return res.json ({
                category: savedCategory,
                msg: "Create Successful"
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg: "Internal Server error"})
        }
    }

    async update (id, data, req, res){
        try {
            const updateCategory = await prisma.category.update({
                where: {
                    id: Number(id)
                },
                data: {
                    name: data.name
                }
            })
            return res.json ({
                user: updateCategory,
                msg: "Update Successful"
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg: "Internal Server error"})
        
        }
    }

    async delete(id,req,res){
        try{
            // console.log(Number(id));
            return res.json({
                data:await prisma.category.delete({
                    where:{
                        id:Number(id)
                    }
                }),
                msg:"Delete Successful"
            })
        }catch (error) {
            // console.log(error);
            return res.status(500).json({msg: "Item not found"})
        
        }
    }
}