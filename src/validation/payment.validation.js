const Joi = require('joi');

module.exports= (data)=>{
    const schema = Joi.object({
        name_onCard: Joi.string().required(),
        card_number: Joi.string().required(),
        exp_month: Joi.number().integer().required(),
        exp_year: Joi.number().integer().required(),
        cvv: Joi.string().required(),

    })
    return schema.validate(data)
}