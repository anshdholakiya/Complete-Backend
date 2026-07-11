const mongoose = require("mongoose")
 

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("db conneted")
    } catch (error) {
        console.log("dB Failed to connnecte")
    }
}

module.exports = connectDB;