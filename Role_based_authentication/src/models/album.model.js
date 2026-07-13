const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    musics: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "music", //* ref always goes to the name of the model not the name of the collection
        },
    ],
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user", //* ref always goes to the name of the model not the name of the collection
        requierd: true,
    },
});

const albumModel = mongoose.model("album", albumSchema);

module.exports = albumModel;
