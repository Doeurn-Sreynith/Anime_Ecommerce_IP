const Joi = require('joi');

module.exports= (data)=>{
    const schema = Joi.object({
        code: Joi.string().required(),
        percent: Joi.string().required(),
        // exp: Joi.string().required()
    })
    return schema.validate(data)
}