const Joi = require('joi');

module.exports= (data)=>{
    const schema = Joi.object({
        name: Joi.string().required(),
        categoryid:Joi.string().required(),
        price:Joi.number().required(),
    })
    return schema.validate(data)
}