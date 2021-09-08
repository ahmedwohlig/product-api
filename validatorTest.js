const Validator = require("jsonschema").Validator;

const validator = new Validator();

function preValidatePropert(object, key, schema, options, ctx) {
    var value = object[key];
    if (typeof value === "undefined") return;

    // Test if the schema declares a type, but the type keyword fails validation
    if (
        schema.type &&
        validator.attributes.type.call(
            validator,
            value,
            schema,
            options,
            ctx.makeChild(schema, key)
        )
    ) {
        // If the type is "number" but the instance is not a number, cast it
        if (schema.type === "number" && typeof value !== "number") {
            object[key] = parseFloat(value);
            return;
        }
        // If the type is "string" but the instance is not a string, cast it
        if (schema.type === "string" && typeof value !== "string") {
            object[key] = String(value).toString();
            return;
        }
    }
}

const aschema = {
    properties: {
        name: { type: "string" },
        quantity: { type: "number" },
    },
};

const aainstance = {
    name: 123,
    quantity: "app1",
};

// And now, to actually perform validation with the coercion hook!
//   var res = validator.validate(instance, schema, { preValidateProperty });

function preValidateProperty(object, key, schema, options, ctx) {
    const value = object[key];
    if (typeof value === undefined) return;

    if (
        schema.type &&
        validator.attributes.type.call(
            validator,
            value,
            schema,
            options,
            ctx.makeChild(schema, key)
        )
    ) {
        if (schema.type == "number" && typeof value !== "number") {
            object[key] = parseFloat(value);
            return;
        }
    }
}

const aaschema = {
    id: "/Product",
    type: "object",
    properties: {
        productName: { type: "string" },
        nid: { type: "string", minLength: 10, maxLength: 10 },
        price: { type: "number" },
    },
    required: ["productName", "nid", "price"],
};

const all = {
    productName: "apple",
    nid: undefined,
    price: "35",
};

// var res = validator.validate(all, schema, { preValidateProperty });

const schema = {
    id: "/Update",
    type: "object",
    properties: {
        productName: { type: "string" },
        price: { type: "number" },
    },
};

const instance = {
    price: 123,
};

const validationResult = validator.validate(instance, schema, {
    preValidateProperty,
});

console.log(validationResult);
console.log(validationResult.valid);
