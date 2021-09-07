const Product = require('../../models/Product')

module.exports = (req, res, next) => {
    const _id = req.params.id

    Product.findByIdAndUpdate(_id,req.body)
    .then(res.json({message:"updated successfuly"}))
    .catch(res.status(400).json({message:"error"}))
}