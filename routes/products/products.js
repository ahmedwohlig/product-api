const router = require("express").Router();

const addProduct = require("./addProduct");
const getProduct = require("./getproduct");
const deleteProduct = require("./deleteProduct");
const updateProduct = require("./updateProduct");
const getAllProducts = require("./getAllProducts");

// validators
const addProductValidator = require("../../validator/product/addProductValidator");
const updateProductValidator = require("../../validator/product/updateProductValidator");
const nidValidator = require("../../validator/product/nidValidator");

router.post("/products", addProductValidator, addProduct);
router.get("/products/:nid", nidValidator, getProduct);
router.delete("/products/:nid", nidValidator, deleteProduct);
router.put(
    "/products/:nid",
    nidValidator,
    updateProductValidator,
    updateProduct
);
router.get("/products", getAllProducts);

module.exports = router;
