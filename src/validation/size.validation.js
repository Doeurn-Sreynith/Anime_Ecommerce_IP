const Joi = require('joi');

module.exports= (data)=>{
    const schema = Joi.object({
        label: Joi.string().required(),
        pid: Joi.string().required(),
        // Image: Joi.string().required()
    })
    return schema.validate(data)
}