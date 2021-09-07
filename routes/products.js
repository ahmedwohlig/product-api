const router = require('express').Router()

const Product = require('../models/Product')
const { productValidator } = require('../config/productValidator')


router.post('/products', (req, res) => {
    const { productName, nid, price } = req.body
    const data = {productName, nid, price}
    const { error } = productValidator(data)
    if(error) return res.status(400).json(error.details[0].message)
    const product = new Product(data)
    product.save().then(() => res.json({message: 'Product successfully added'}))    
})

router.get('/products/:nid', async (req, res) => {
    const nid = req.params.nid

    const found = await Product.findOne({nid: nid})
    if(!found) return res.status(400).json({message: 'Product not found'})

    res.json(found)
})


router.delete('/products/:nid', async(req, res) => {
    const nid = req.params.nid

    Product.findOneAndDelete({nid: nid})
    .then(res.json({message:"deleted successfully"}))
    .catch(err => res.status(400).json(err))
})

router.put('/products/:id', async (req, res) => {
    const _id = req.params.id

    Product.findByIdAndUpdate(_id,req.body)
    .then(res.json({message:"updated successfuly"}))
    .catch(res.status(400).json({message:"error"}))
})

router.get('/products', async (req, res) => {
    const data = await Product.find({})

    res.json(data)
})
module.exports = router