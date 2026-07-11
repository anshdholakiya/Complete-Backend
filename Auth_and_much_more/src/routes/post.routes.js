const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

router.post("/create", async (req, res) => {
    const token = req.cookies.token_save_in_client;

    if (!token) {
        return res.status(401).json({
            //* return kravi devanu nakar agal vyu jashe and error avshe okay
            message: "401 stands for Unauthoried",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded);
        //* when we make jwt threw sign method in payload we give {id} that {id} is here decoded and in object id and iat given iat is which time token is created that is there

        const user = await userModel.findOne({
            _id: decoded.id, //! because in mongodb id is _id
        });

        console.log(user);
    } catch (error) {
        return res.status(500).json({
            message: "500 stand for HTTP internal server error",
        });
    }

    res.send("dummy api chhe");
});

module.exports = router;
