const Joi = require('joi');

module.exports = (data)=>{
    const schema = Joi.object({
        code: Joi.string(),
        percent: Joi.string()
    })

    return schema.validate(data)
}