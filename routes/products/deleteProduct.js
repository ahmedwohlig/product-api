const Product = require("../../models/Product");

module.exports = async (req, res, next) => {
    const nid = req.params.nid;

    const found = await Product.findOne({ nid });
    if (!found) return res.status(404).json({ error: "Product not found" });

    Product.deleteOne(found).then(
        res.json({ message: "deleted successfully" })
    );
};
