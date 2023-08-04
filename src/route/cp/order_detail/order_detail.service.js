const { PrismaClient }=  require( '@prisma/client')
const prisma = new PrismaClient() 
;
function calculateTotal(quantity, price) {
    return quantity * price;
}


module.exports = class order_detail{
    async list(req, res){
        return res.json(await prisma.order_detail.findMany({
            include:{
                product: true,
                order: true
            }
        }))
    }

    // async create(data, req, res){

    //     try {
    //         const fixedPrice = 10;
    //         const calculatedTotal = calculateTotal(data.quantity, fixedPrice);

    //         const saveOrder_detail = await prisma.order_detail.create({
    //             data: {
    //                 quantity: data.quantity,
    //                 // discount: data.discount,
    //                 pid_id: data.pid_id,
    //                 total: calculatedTotal,
    //             },
    //         })
    //         return res.json({
    //             order_detail: saveOrder_detail,
    //             msg: "Create Successful"
    //         })
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({msg: "Internal Server error"})
    //     }
    // }

    async update(id, data, req, res){
        try {
            const updateOrder_detait = await prisma.order_detail.update({
                where: {
                    id: Number(id)
                },
                data:{
                    name: data.name
                }
            })
            return res.json ({
                order_detail: updateOrder_detait,
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
                data: await prisma.order_detail.delete({
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