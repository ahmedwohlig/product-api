const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        firstName: String,
        lastName: String,
    },
    email: String,
    mobile: Number,
    address: {
        street: String,
        lane: String,
    },
    gender: String,
    password: String,
});

module.exports = mongoose.model("User", userSchema);
