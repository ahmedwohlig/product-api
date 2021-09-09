const router = require("express").Router();

const signUpValidator = require("../../validator/user/signUpValidator");
const signupUser = require("./routefunctions/signupUser");

router.post("/register", signUpValidator, signupUser);

module.exports = router;
