const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
    uri: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user", //! artist ni detail user collection ma store thay to user collection no referance devo pde ne 
        required: true,
    },  
});

const musicModel = mongoose.model("music", musicSchema);
module.exports = musicModel;