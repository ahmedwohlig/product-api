const Joi = require('joi')
const mongoose = require('mongoose')

const productSchema = Joi.object({
    _id: mongoose.Types.ObjectId,
    productName: Joi.string().pattern(/^[a-zA-Z]+$/).required(),
    nid: Joi.string().length(6).pattern(/^[0-9]+$/).required(),
    price: Joi.number().required(),
})


const productValidator = (product) => {
    return productSchema.validate(product)
}

module.exports = { productValidator }