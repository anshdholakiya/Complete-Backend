const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
    const { username, email, password } = req.body;

    const isUserAlredyExists = await userModel.findOne({ email }); // it return user or null

    if (isUserAlredyExists) {
        return res.status(409).json({
            message: "409 conflit error this state is alredy exists type",
        });
    }

    const user = await userModel.create({
        username,
        email,
        password,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    console.log(user);
    res.cookie("token_save_in_client", token); //* here we send cookie the token with name token we can change the name here

    res.status(201).json({
        message: "201 for new data created",
        user,
    });
}

module.exports = { registerUser }; // here wrap in object so we can access in other routes file
