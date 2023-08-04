const Joi = require('joi');

module.exports= (data)=>{
    const schema = Joi.object({
        name: Joi.string(),
        email:Joi.string(),
        message: Joi.string()
        
    })
    return schema.validate(data)
}