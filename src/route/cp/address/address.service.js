const { PrismaClient }=  require( '@prisma/client')
const prisma = new PrismaClient() 

module.exports = class address{
    async list(req, res){
        return res.json(await prisma.address.findMany({
            include:{
                country: true,
                province: true,
                distric: true,
                commune: true,
                // addresss: true
            }
        }))
    }

    async create(data, req, res){
        try {
            const saveAddress = await prisma.address.create({
                data:{
                    name: data.name,
                    address: data.address,
                    kh_name: data.kh_name,
                    created: new Date(),
                    updated: new Date()

                },
            })
            return res.json ({
                user : saveAddress,
                msg: "Create Successful"
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg: "Internal Server error"})
        }
    }

    async update(id, data, req, res){
        try {
            const updateAddress = await prisma.address.update({
                where: {
                    id: Number(id)
                },
                data:{
                    name:data.name,
                    address: data.address
                },
            })
            return res.json({
                user: updateAddress,
                msg: "Update Successful"
            })
        } catch (error) {
            
        }
    }

    async delete (id, req, res){
        try {
            return res.json({
                data: await prisma.address.delete({
                    where:{
                        id: Number(id)
                    }
                }),
                msg: "Delete Successful"
            })
        } catch (error) {
            return res.status(500).json({msg: "Item not found"})
        }
    }
}