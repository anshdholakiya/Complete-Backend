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

async function getAllMusic(req, res) {
    const musics = await musicModel
        .find()
        .skip(1)
        .limit(2)
        .populate("artist", "username email");

    //* populate is used to get the data of the artist from the user model and we can select the fields we want to get from the user model by passing the second argument to populate method
    //* it return all the music

    res.status(200).json({
        message: "All musics fetched successfully",
        musics: musics,
    });
}

async function getAllAlbums(req, res) {
    const albums = await albumModel
        .find()
        .select("title artist")
        .populate("artist", "username email");
    //* populate is used to get the data of the artist from the user model and we can select the fields we want to get from the user model by passing the second argument to populate method
    //* it return all the albums

    res.status(200).json({
        message: "All albums fetched successfully",
        albums: albums,
    });
}

async function getAlbumById(req, res) {
    const albumId = req.params.albumId;
    try {
        const album = await albumModel
            .findById(albumId)
            .populate("artist", "username email")
            .populate("musics");
        res.status(200).json({
            message: "Album fetched successfully",
            album: album,
        });
    } catch (err) {
        return res.status(404).json({
            message: "Album not found",
        });
    }
}

module.exports = {
    createMusic,
    createAlbum,
    getAllMusic,
    getAllAlbums,
    getAlbumById,
};
