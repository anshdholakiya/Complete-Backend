const musicModel = require("../models/music.model");
const jwt = require("jsonwebtoken");

async function createMusic(req, res) {
    console.log(req.cookies);
    console.log(req.body);

    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "401 for Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        if (decoded.role !== "admin") {
            return res.status(403).json({ message: "don't have access to" });
        }
    } catch (err) {
        return res.status(401).json({ message: "401 for Unauthorized" });
    }
}

module.exports = {
    createMusic,
};
