const Joi = require('joi');

module.exports= (data)=>{
    const schema = Joi.object({
        taxes: Joi.number().required(),
        payment_methodId:Joi.number().required(),
        pickupOptId:Joi.number().required(),
        coupon:Joi.number().required(),
        order_details:Joi.number().required(),
        shipping_address_id:Joi.number().required(),
        details: Joi.array().items(
            Joi.object({
                quantity:Joi.number().required(),
                pid:Joi.string().required()
            })
            )
            
        })
        return schema.validate(data)
    }