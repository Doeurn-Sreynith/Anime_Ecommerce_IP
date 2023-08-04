const { PrismaClient }=  require( '@prisma/client')
const prisma = new PrismaClient() 

module.exports = class contact {
    async list(req, res){
        try {
            return res.json(await prisma.contact.findMany({
                include:{
                    user: true
                    // name: true,
                    // email: true,
                    // message: true
                }
            }))
        } catch (error) {
            console.error("Error retrieving contact:", error);
            res.status(500).json({ error: "Failed to retrieve contacts" });
        }
    }

    async create(data, req, res){
        try {
            const saveContact = await prisma.contact.create({
                data:{
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    created: new Date(),
                    updated: new Date()
                },
            })
            return res.json ({
                contact: saveContact,
                msg: "Create Successful"
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg: "Internal Server error"})
        }
    }

    async update(id, data, req, res){
        try {
            const updateContact = await prisma.contact.update({
                where:{
                    id: Number(id)
                },
                data:{
                    message: data.message
                },
            })
            return res.json({
                contact : updateContact,
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
                data: await prisma.contact.delete({
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