const Joi = require('joi');

module.exports= (data)=>{
    const schema = Joi.object({

        quantity: Joi.string().required(),
        pid_id: Joi.string().required()

        
    })
    return schema.validate(data)
}