const Validator = require("jsonschema").Validator;

const v = new Validator();

const preValidateProperty = require("../../config/preValidateProperty");

const schema = {
    id: "/Update",
    type: "object",
    properties: {
        productName: { type: "string" },
        price: { type: "number" },
    },
};

module.exports = (req, res, next) => {
    const validationResult = v.validate(req.body, schema, {
        preValidateProperty: preValidateProperty,
    });
    if (validationResult.valid) {
        next();
    } else {
        res.status(400).json({
            error: `${validationResult.errors[0].path} ${validationResult.errors[0].message}`,
        });
    }
};
