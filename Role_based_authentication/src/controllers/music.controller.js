const musicModel = require("../models/music.model");
const jwt = require("jsonwebtoken");
const { uploadFile } = require("../services/storage.service");

async function createMusic(req, res) {
    const token = req.cookies.token;
    if (!token) {
        return res
            .status(401)
            .json({ message: "401 for Unauthorized token j nthi bhai" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log("This is data of decoded after Token Verified : \n", decoded); //! here we get what pass as payload while creating jwt

        if (decoded.role !== "artist") {
            return res
                .status(403)
                .json({ message: "don't have access to user" });
        }

        const { title } = req.body;
        const file = req.file;

        const result = await uploadFile(file.buffer.toString("base64"));

        const music = await musicModel.create({
            uri: result.url,
            title,
            artist: decoded.id,
        });

        res.status(201).json({
            message: "created succssfully",
            music: {
                id: music._id,
                uri: music.uri,
                title: music.title,
                artist: music.artist.name,
            },
        });
    } catch (err) {
        //* if token is not verified
        return res.status(401).json({ message: "401 for Unauthorized" });
    }
}

module.exports = {
    createMusic,
};
