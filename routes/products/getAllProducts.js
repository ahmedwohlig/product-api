const Product = require('../../models/Product')

module.exports = async (req, res, next) => {
    const data = await Product.find({})

    res.json(data)
}