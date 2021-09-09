const User = require("../../../models/User");

module.exports = async (req, res, next) => {
    const found = await User.findOne({ email: req.body.email });
    if (!found)
        return res.status(404).json({
            status: 404,
            message: "not found",
            error: "user not found",
        });
    // check password
    // make jwt/session/cookies
    res.status(202).json({
        status: 202,
        message: "you're logged in",
        access_token: "save the token",
    });
};
