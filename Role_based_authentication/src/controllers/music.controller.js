const musicModel = require("../models/music.model");
const albumModel = require("../models/album.model");
const jwt = require("jsonwebtoken");
const { uploadFile } = require("../services/storage.service");

async function createMusic(req, res) {
    const { title } = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString("base64"));

    const music = await musicModel.create({
        uri: result.url,
        title,

        // artist: decoded.id,
        //* in jwt in payload there is role and id of user

        artist: req.user.id, //* from previos auth middleware we can access decoded data in req.user
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
}

async function createAlbum(req, res) {
    const { title, musicIds } = req.body;

    const album = await albumModel.create({
        title,
        artist: req.user.id, //! here also we can access decoded data in req.user from previos auth middleware
        musics: musicIds,
    });

    res.status(201).json({
        message: "Album created successfully",
        album: {
            id: album._id,
            title: album.title,
            artist: album.artist,
            musics: album.musics,
        },
    });
}

module.exports = {
    createMusic,
    createAlbum,
};
