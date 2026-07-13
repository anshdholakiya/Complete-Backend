const express = require("express");
const musicController = require("../controllers/music.controller");
const multer = require("multer"); //* require multer for uplodding file it is middle ware

const upload = multer({
    storage: multer.memoryStorage(),
});

const router = express.Router();

router.post("/upload", upload.single("music"), musicController.createMusic);

module.exports = router;
