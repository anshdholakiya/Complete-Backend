const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI);

    // await mongoose.connect("mongodb+srv://ansh:uuyGmfUr9pHlGUQE@complete-backend-ansh.gvqrjam.mongodb.net/project-1")
} 

module.exports = connectDB;