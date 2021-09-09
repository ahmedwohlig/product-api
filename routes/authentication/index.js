const router = require("express").Router();

const signUpValidator = require("../../validator/user/signUpValidator");
const signInUser = require("./routefunctions/signInUser");
const signupUser = require("./routefunctions/signupUser");

router.post("/register", signUpValidator, signupUser);
router.post("/login", signInUser);

module.exports = router;
