const router = require("express").Router();

const productRoutes = require("./products/index");
const authenticationRoutes = require("./authentication/index");

router.use("", productRoutes);
router.use("", authenticationRoutes);

module.exports = router;
