const router = require("express").Router();

const addProduct = require("./addProduct");
const getProduct = require("./getproduct");
const deleteProduct = require("./deleteProduct");
const updateProduct = require("./updateProduct");
const getAllProducts = require("./getAllProducts");

// validators
const addProductValidator = require("../../validator/product/addProductValidator");
const updateProductValidator = require("../../validator/product/updateProductValidator");

router.post("/products", addProductValidator, addProduct);
router.get("/products/:nid", getProduct);
router.delete("/products/:nid", deleteProduct);
router.put("/products/:nid", updateProductValidator, updateProduct);
router.get("/products", getAllProducts);

module.exports = router;
