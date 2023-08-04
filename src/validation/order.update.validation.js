const Joi = require('joi');

module.exports= (data)=>{
    const schema = Joi.object({

        taxes: Joi.number(),
        payment_methodId:Joi.number(),
        pickupOptId:Joi.number(),
        coupon:Joi.number(),
        shipping_address_id:Joi.number(),
        
        
    })
    return schema.validate(data)
}