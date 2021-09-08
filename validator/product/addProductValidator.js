const Validator = require("jsonschema").Validator;

const v = new Validator();

const preValidateProperty = require("../../config/preValidateProperty");

const schema = {
    id: "/Product",
    type: "object",
    properties: {
        productName: { type: "string" },
        nid: { type: "string", minLength: 10, maxLength: 10 },
        price: { type: "number" },
    },
    required: ["productName", "nid", "price"],
};

module.exports = (req, res, next) => {
    const validationResult = v.validate(req.body, schema, {
        preValidateProperty,
    });
    if (validationResult.valid) {
        next();
    } else {
        res.json({
            error: `${validationResult.errors[0].path} ${validationResult.errors[0].message}`,
        });
    }
};
