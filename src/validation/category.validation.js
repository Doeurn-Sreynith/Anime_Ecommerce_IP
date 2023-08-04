const Joi = require('joi');

module.exports= (data)=>{
    const schema = Joi.object({
        name: Joi.string().required(),
    })
    return schema.validate(data)
}