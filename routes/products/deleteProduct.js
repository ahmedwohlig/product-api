const Product = require("../../models/Product");

module.exports = (req, res, next) => {
    const nid = req.params.nid;

    Product.findOneAndDelete({ nid: nid })
        .then(res.json({ message: "deleted successfully" }))
        .catch((err) => res.status(400).json({ error: err }));
};
