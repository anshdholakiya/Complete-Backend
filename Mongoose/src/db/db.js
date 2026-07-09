const mongoose = require("mongoose");

async function connectDB() {  //* connect server to database

    //! "mongodb+srv://ansh:uuyGmfUr9pHlGUQE@complete-backend-ansh.gvqrjam.mongodb.net"  this is cluster url not database okay
    await mongoose.connect("mongodb://ansh:uuyGmfUr9pHlGUQE@ac-p3rcobr-shard-00-00.gvqrjam.mongodb.net:27017,ac-p3rcobr-shard-00-01.gvqrjam.mongodb.net:27017,ac-p3rcobr-shard-00-02.gvqrjam.mongodb.net:27017/hally?ssl=true&replicaSet=atlas-o76c6p-shard-0&authSource=admin&appName=Complete-Backend-Ansh");

    console.log("connected to db");
}

module.exports = connectDB;