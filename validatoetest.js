const Validator = require("jsonschema").Validator;

const v = new Validator();

const nameSchema = {
    id: "/Name",
    type: "object",
    properties: {
        firstName: { type: "string" },
        lastName: { type: "string" },
    },
    pattern: /[A-Za-z]/,
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
        email: { type: "string" },
        mobile: { type: "number" },
        address: { $ref: "/Address" },
        gender: { enum: ["male", "female"] },
    },
};

v.addSchema(nameSchema, "/Name");
v.addSchema(addressSchema, "/Address");

const instance = {
    name: {
        firstName: "Apple",
        lastName: "Banana",
    },
    email: "a@b.com",
    mobile: 112312,
    address: {
        street: "125 apple st",
        lane: "new banana lane",
    },
    gender: "male",
};

const valido = v.validate(instance, userSchema);

console.log(valido);
console.log(valido.valid);
