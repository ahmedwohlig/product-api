const User = require("../../../models/User");

module.exports = async (req, res, next) => {
    const found = await User.findOne(req.body);
    if (found)
        return res.status(409).json({
            status: 409,
            message: "conflict",
            error: "user with this credentials already exists",
        });

    const newUser = new User(req.body);
    newUser
        .save()
        .then(
            res.status(201).json({
                status: 201,
                message: "user created successfully",
            })
        )
        .catch((err) => {
            res.status(400).json({
                status: 400,
                message: "Bad Request",
                error: err.message,
            });
        });
};
