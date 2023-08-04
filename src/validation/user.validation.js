const Joi = require('joi');

module.exports= (data)=>{
    const schema = Joi.object({
        username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),


        firstname: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),


        lastname: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
        
        password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        
        repeat_password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

        tel:Joi.string(),
        genderid: Joi.number().required(),
        dob:Joi.string(),
        email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        
    })
    return schema.validate(data)
}