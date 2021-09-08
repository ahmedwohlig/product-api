const Validator = require("jsonschema").Validator;

const v = new Validator();

const preValidateProperty = require("../../config/preValidateProperty");

const schema = {
    id: "/Nid",
    type: "object",
    properties: {
        nid: { type: "string", maxLength: 10, minLength: 10 },
    },
};

module.exports = (req, res, next) => {
    const validatorResult = v.validate(req.params.nid, schema, {
        preValidateProperty: validatorResult,
    });

    if (validatorResult.valid) {
        next();
    } else {
        res.json({
            error: `${validationResult.errors[0].path} ${validationResult.errors[0].message}`,
        });
    }
};
