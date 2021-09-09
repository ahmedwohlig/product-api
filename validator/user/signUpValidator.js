const Validator = require("jsonschema").Validator;

const errorLogger = require("../../config/errorLogger");

const v = new Validator();

const nameSchema = {
    id: "/Name",
    type: "object",
    properties: {
        firstName: {
            type: "string",
            minLength: 2,
        },
        lastName: {
            type: "string",
            minLength: 2,
        },
    },
};

const addressSchema = {
    id: "/Address",
    type: "object",
    properties: {
        street: { type: "string" },
        lane: { type: "string" },
    },
};

const userSchema = {
    id: "/User",
    type: "object",
    properties: {
        name: { $ref: "/Name" },
        email: {
            type: "string",
            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        },
        mobile: {
            type: "string",
            maxLength: 10,
            minLength: 10,
        },
        address: { $ref: "/Address" },
        gender: { enum: ["male", "female", "MALE", "FEMALE"] },
        password: { type: "string", minLength: 8 },
    },
};

v.addSchema(nameSchema, "/Name");
v.addSchema(addressSchema, "/Address");

module.exports = (req, res, next) => {
    const validationResult = v.validate(req.body, userSchema);
    if (validationResult.valid) return next();

    const errs = errorLogger(validationResult);
    res.json(errs);
};
