const jwt = require("jsonwebtoken");

async function authArtist(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res
            .status(401)
            .json({ message: "401 for Unauthorized token j nthi bhai" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== "artist") {
            return res.status(403).json({ message: "don't have access" });
        }

        req.user = decoded;
        //* we can access this decoded data in next middleware or controller
        //* also we can modified request in middlware and pass it to next middleware or controller

        next(); //! pass control to next middleware or controller
    } catch (err) {
        return res.status(401).json({ message: "401 for Unauthorized" });
    }
}

async function authUser(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res
            .status(401)
            .json({ message: "401 for Unauthorized token j nthi bhai" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== "user" && decoded.role !== "artist") {
            return res.status(403).json({ message: "don't have access" });
        }
        req.user = decoded;
        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({ message: "401 for Unauthorized" });
    }
}
module.exports = { authArtist , authUser };
