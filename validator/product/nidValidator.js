const Validator = require("jsonschema").Validator;

const v = new Validator();

const preValidateProperty = require("../../config/preValidateProperty");

const schema = {
    id: "/Nid",
    nid: { type: "string", maxLength: 10, minLength: 10 },
};

module.exports = (req, res, next) => {
    const validationResult = v.validate(req.params.nid, schema, {
        preValidateProperty: preValidateProperty,
    });

    if (validationResult.valid) {
        next();
    } else {
        res.json({
            error: `${validationResult.errors[0].path} ${validationResult.errors[0].message}`,
        });
    }
};
