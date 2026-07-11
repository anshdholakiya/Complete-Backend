require("dotenv").config();
const app = require("./src/app") // server start
const connectDB = require("./src/db/db")

connectDB();


app.listen(3000,()=>{
    console.log("server is running")
})