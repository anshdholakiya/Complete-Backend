const app = require("./src/app.js");
const connectDB = require("./src/db/db");


connectDB();

// server start from here okay
app.listen(3000,()=>{
    console.log("server is running in 3000");
})