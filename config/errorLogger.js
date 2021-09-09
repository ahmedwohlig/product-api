module.exports = (validationResult) => {
    const errs = { status: 400, message: "Bad Request", error: {} };
    validationResult.errors.map((error) => {
        console.log(error);
        if (error.path[1] === "firstName" || "lastName") {
            if (error.name == "minLength") {
                errs.error.name = `${error.path[1]} should should be atleast ${error.schema.minLength} characters long`;
            }
        }

        if (error.path[0] === "email") {
            errs.error.email = `should be a valid ${error.path[0]}`;
        }
        if (error.path[0] == "mobile") {
            if (error.name === "minLength" || "maxLength") {
                errs.error.mobile = `${error.path[0]} number should be ${error.schema.minLength} digits`;
            }
        }
        if (error.path[0] == "gender") {
            errs.error.gender = `${error.path[0]} should be male or female`;
        }
        if (error.path[0] == "password") {
            if (error.name === "minLength") {
                errs.error.password = `${error.path[0]} should be minimum ${error.schema.minLength} characters long`;
            }
        }
    });

    return errs;
};
