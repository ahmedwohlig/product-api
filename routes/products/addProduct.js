const Product = require("../../models/Product");

module.exports = (req, res, next) => {
    const alreadyExists = Product.findOne(req.body);
    if (alreadyExists) res.json({ error: "Product already exists" });
    const product = new Product(req.body);
    product
        .save()
        .then(() => res.json({ message: "Product successfully added" }))
        .catch((err) => res.json({ error: err }));
};
