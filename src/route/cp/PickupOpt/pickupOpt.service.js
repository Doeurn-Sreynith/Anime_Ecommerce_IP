const { PrismaClient }=  require( '@prisma/client')
const prisma = new PrismaClient() 

module.exports = class pickupOpt {
    async list(req, res){
        try {
            return res.json(await prisma.pickupOpt.findMany({

            }))
        } catch (error) {
            console.error("Error retrieving pickupOpt:", error);
            res.status(500).json({ error: "Failed to retrieve pickupOpt" });
        }
    }

    async create(data, req, res){
        try {
            const savePickupOpt = await prisma.pickupOpt.create({
                data:{
                    name: data.name,
                    create: new Date()
                },
            })
            return res.json ({
                pickupOpt: savePickupOpt,
                msg: "Create Successful"
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg: "Internal Server error"})
        }
    }

    async update(id, data, req, res){
        try {
            const updatePickupOpt = await prisma.pickupOpt.update({
                where: {
                    id: Number(id)
                },
                data:{
                    name: data.name
                }
            })
            return res.json ({
                pickupOpt: updatePickupOpt,
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
                data: await prisma.pickupOpt.delete({
                    where:{
                        id: Number(id)
                    }
                }),
                msg:"Delete Sussessfull"
            })
        } catch (error) {
            return res.status(500).json({msg: "Item not found"})
        
        }
    }
}