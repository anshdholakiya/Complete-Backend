require("dotenv").config();
const app = require('./src/app');   // server starting point
const connectDB = require("./src/db/db");
 
connectDB();
console.log("DB is also running")

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
}) 