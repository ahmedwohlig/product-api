const { productValidator } = require('../../validator/productValidator')
const Product = require('../../models/Product')


module.exports = (req, res, next) => {
    const { productName, nid, price } = req.body
    const data = {productName, nid, price}
    const { error } = productValidator(data)
    if(error) return res.status(400).json(error.details[0].message)
    const product = new Product(data)
    product.save().then(() => res.json({message: 'Product successfully added'}))
}