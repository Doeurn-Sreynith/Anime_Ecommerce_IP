const Joi = require('joi');

module.exports= (data)=>{
    const schema = Joi.object({
        name: Joi.string(),
        address: Joi.string(),
        kh_name: Joi.string()

    })
    return schema.validate(data)
}