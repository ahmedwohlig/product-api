const Product = require("../../models/Product");

module.exports = async (req, res, next) => {
    const alreadyExists = await Product.findOne(req.body);
    if (alreadyExists)
        return res.status(409).json({ error: "Product already exists" });
    const product = new Product(req.body);
    product
        .save()
        .then(() => res.json({ message: "Product successfully added" }))
        .catch((err) => res.status(400).json({ error: err }));
};
