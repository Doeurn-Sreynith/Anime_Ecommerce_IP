const Joi = require('joi');

module.exports= (data)=>{
    const schema = Joi.object({
        name_onCard: Joi.string(),
        card_number: Joi.string(),
        exp_month: Joi.number().integer(),
        exp_year: Joi.number().integer(),
        cvv: Joi.string()

    })
    return schema.validate(data)
}