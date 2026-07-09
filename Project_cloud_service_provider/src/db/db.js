const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect("mongodb://ansh:uuyGmfUr9pHlGUQE@ac-p3rcobr-shard-00-00.gvqrjam.mongodb.net:27017,ac-p3rcobr-shard-00-01.gvqrjam.mongodb.net:27017,ac-p3rcobr-shard-00-02.gvqrjam.mongodb.net:27017/project-1?ssl=true&replicaSet=atlas-o76c6p-shard-0&authSource=admin&appName=Complete-Backend-Ansh");
} 

module.exports = connectDB;