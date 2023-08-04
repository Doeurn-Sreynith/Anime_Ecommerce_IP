const Joi = require('joi');


module.exports = (data)=>{
    const schema = Joi.object({

        label: Joi.string()
        // image: Joi.string()
    })

    return schema.validate(data)
}