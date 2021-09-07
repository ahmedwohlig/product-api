const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName: String,
    nid: String,
    price: String,
})

module.exports =mongoose.model('Product', productSchema)