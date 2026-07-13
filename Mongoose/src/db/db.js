const mongoose = require("mongoose");

async function connectDB() {  //* connect server to database

    //! "mongodb+srv://ansh:<password>@complete-backend-ansh.gvqrjam.mongodb.net"  this is cluster url not database okay
    await mongoose.connect(process.env.MONGO_URI);

    console.log("connected to db");
}

module.exports = connectDB;