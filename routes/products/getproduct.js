const Product = require("../../models/Product");

module.exports = async (req, res, next) => {
    const nid = req.params.nid;

    const found = await Product.findOne({ nid: nid });
    if (!found) return res.status(404).json({ message: "Product not found" });

    res.json(found);
};
