const Joi = require('joi');

module.exports=(data)=>{
    const schema = Joi.object({
        EUID: Joi.string()
            .min(3)
            .max(30)
            .required(),
    
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    })
    return schema.validate(data)

}