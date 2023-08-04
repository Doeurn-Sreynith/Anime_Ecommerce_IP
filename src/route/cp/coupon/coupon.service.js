const { PrismaClient }=  require( '@prisma/client')
const prisma = new PrismaClient() 
const { DateTime } = require("@prisma/client"); // Import the DateTime data type from Prisma
const expDate = new Date("2023-12-31T23:59:59.999Z"); // December 31, 2023, at 11:59:59 PM (UTC)
const startDate = new Date("2023-07-01T00:00:00.000Z"); // July 1, 2023, at 12:00:00 AM (UTC)

module.exports = class coupon {
    async list(req, res) {
        try {
            return res.json(await prisma.coupon.findMany({
            // include: {
            //     percent: true,
            //     start_date: true,
            //     exp: true,
            // }
            }));
        } catch (error) {
            // Handle the error, if needed
            console.error("Error retrieving coupons:", error);
            res.status(500).json({ error: "Failed to retrieve coupons" });
        }
    }

    async create(data, req, res){
        try {
            const saveCoupon = await prisma.coupon.create({
                data:{
                    code: data.code,
                    percent: data.percent,
                    exp:new Date("2023-12-31T23:59:59.999Z"),
                    start_date:  new Date("2023-07-01T00:00:00.000Z")
                },
            })
            return res.json ({
                coupon: saveCoupon,
                msg: "Create Successful"
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg: "Internal Server error"})
        }
    }

    async update (id, data, req, res){
        try {
            const updateCoupon = await prisma.coupon.update({
                where: {
                    id: Number(id)
                },
                data: {
                    code: data.code,
                    percent: data.percent
                }
            })
            return res.json ({
                coupon: updateCoupon,
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
                data: await prisma.coupon.delete({
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