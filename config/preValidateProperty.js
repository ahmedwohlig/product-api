const Validator = require("jsonschema").Validator;

const validator = new Validator();

module.exports = function (object, key, schema, options, ctx) {
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
};
