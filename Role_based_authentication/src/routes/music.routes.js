const express = require("express");
const musicController = require("../controllers/music.controller");
const multer = require("multer"); //* require multer for uplodding file it is middle ware

const authMiddleware = require("../middlewares/auth.middleware");

const upload = multer({
    storage: multer.memoryStorage(),
});

const router = express.Router();

router.post(
    "/upload", //* request goes to this route first then it goes to authMiddleware.authArtist then it goes to upload.single("music") then it goes to musicController.createMusic

    authMiddleware.authArtist,
    upload.single("music"),
    musicController.createMusic,
);

router.post("/album", authMiddleware.authArtist, musicController.createAlbum);

module.exports = router;
