const router = require('express').Router()

const addProduct = require('./addProduct')
const getProduct = require('./getproduct')
const deleteProduct = require('./deleteProduct')
const updateProduct = require('./updateProduct')
const getAllProducts = require('./getAllProducts')


router.post('/products', addProduct)
router.get('/products/:nid', getProduct)
router.delete('/products/:nid',deleteProduct)
router.put('/products/:id', updateProduct)
router.get('/products', getAllProducts)

module.exports = router