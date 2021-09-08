const Product = require("../../models/Product");

module.exports = (req, res, next) => {
    const nid = req.params.nid;

    Product.findOneAndUpdate({ nid: nid }, req.body)
        .then(res.json({ message: "updated successfuly" }))
        .catch(res.status(400).json({ message: "error" }));
};
