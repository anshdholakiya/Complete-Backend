const express = require("express"); // server created
const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.routes");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser()); //* without this middleware server can not access the cookie or can't sotre anything in cookie

app.use("/api/auth", authRoutes);
/* here is /api/auth is prefix that get in front of the route that came in authRoutes  */

app.use("/api/posts", postRoutes);

module.exports = app;
