const Product = require("../../models/Product");

module.exports = (req, res, next) => {
    const product = new Product(req.body);
    product
        .save()
        .then(() => res.json({ message: "Product successfully added" }))
        .catch((err) => res.json({ error: err }));
};
