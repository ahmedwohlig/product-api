const Validator = require('jsonschema').Validator

const validator = new Validator()

const productSchema = {
    productName: String,
    nid: Number,
    price: Number,
}

module.exports = (req, res, next) => {
    
}