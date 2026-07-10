const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image: String,
    caption: String
});

const postModel = mongoose.model("post", postSchema); //  aa postSchema na blue print mathi model bnavi nakh je bdha operation kri shke okay

//! what will collection name that is first parameter in model

module.exports = postModel;