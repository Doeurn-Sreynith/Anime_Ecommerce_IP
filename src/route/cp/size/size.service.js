const { PrismaClient }=  require( '@prisma/client')
const prisma = new PrismaClient() 


module.exports = class size {
    async list(req, res){
        return res.json (await prisma.size.findMany({
            include: {
                product: true,
                // image: true,
                // label:true
            }
        }))
    }

    async create(data, req, res){
        try {
            const saveSize = await prisma.size.create({
                data:{
                    label: data.label,
                    image: data.imagePath,
                    pid: data.pid
                },
            })
            return res.json({
                size: saveSize,
                msg: "Create Successful"
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg: "Internal Server error"})
        }

    }

    async update (id, data, imagePath, req, res){
        try {
            const updateSize = await prisma.size.update({
                where:{
                    id: Number(id)
                },
                data:{
                    label: data.label,
                    image: imagePath
                }
            })
            return res.json ({
                user: updateSize,
                msg: "Update Successful"
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg: "Internal Server error"})
        }
    }

    async delete (id, req, res){
        try {
            return res.json({
                data: await prisma.size.delete({
                    where:{
                        id: Number(id)
                    }
                }),
                msg: "Delete Size Successful"
            })
        } catch (error) {
            return res.status(500).json({msg: "Internal Server error"})
        }
    }
}