const { PrismaClient }=  require( '@prisma/client');
const { number } = require('joi');
const prisma = new PrismaClient() 
// const 


module.exports = class order{
    async list(req, res){
        return res.json(await prisma.order.findMany({
            include: {
                payment_method: true,
                order_details: true,
                pickupOpt: true,
                coupon: true,
                // taxes: true
            }
        }))
    }

    async create(data, req, res){
        try {
            // return res.json(data);

            const n_order=await prisma.order.count();
            const rid=`ORDER${n_order+1}`;


            const savedOrder = await prisma.order.create({
                data:{
                        taxes: data.taxes,
                        payment_methodId: Number(data.payment_methodId),
                        pickupOptId: Number(data.pickupOptId),
                        couponId: Number(data.coupon),
                        rid: rid,
                        total: 0,
                        taxes: 0,
                        sub_total:0,
                        user_id: req.user.id,
                        shipping_address_id: Number(data.shipping_address_id),
                    },
                    include:{
                        coupon:true
                    }
            })

            // console.log(data.details);
            let order_total=0;
            for(const detail of data.details){
                const tmp_exist=await prisma.product.findFirst({
                    where:{
                        pid:detail.pid
                    }
                })
                if(tmp_exist){
                    const order_detail_total=detail.quantity*tmp_exist.price;
                    order_total+=order_detail_total
                    const tmpOrder_Detail=await prisma.order_detail.create({
                      data:{
                          pid:detail.pid,
                          quantity:detail.quantity,
                          total:order_detail_total,
                          rid:savedOrder.rid

                      }
                    })

                }
            }



            return res.json({
                order: await prisma.order.update({
                    where:{
                        rid:savedOrder.rid
                    },
                    data:{
                        sub_total:order_total,
                        taxes:order_total*0.1,
                        total:((order_total*0.1)+order_total) - (((order_total*0.1)+order_total)*savedOrder.coupon.percent)
                    },
                    include:{
                        order_details:true,
                        coupon:{
                            select:{
                                percent:true
                            }
                        }
                    }
                }),
                msg: "Create Successful"
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg: "Internal Server error"})
        }
    }

    async update(id, data, req, res){
        try {
            const updateOrder = await prisma.order.update({
                where:{
                    id: Number(id)
                },
                data:{
                    taxes: data.taxes,
                    payment_methodId: Number(data.payment_methodId),
                    pickupOptId: Number(data.pickupOptId),
                    couponId: Number(data.coupon),
                    shipping_address_id: Number(data.shipping_address_id)
                }
            })
            return res.json ({
                user: updateOrder,
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
                data:await prisma.order.delete({
                    where:{
                        id: Number(id)
                    }
                }),
                msg: "Delete Sucessful"
            })
        } catch (error) {
            return res.status(500).json({msg: "Item not found"})
        
        }
    }
}