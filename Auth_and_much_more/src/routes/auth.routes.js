//* in this file we only write routes not the logic of the particular route logic of that route written in controller folder

const express = require("express");
const authController = require("../controller/auth.controller");

//! we can not require app and use app.post and app.get here we are going to production level code

const router = express.Router();

/* POST  /api/auth/register  */
router.post("/register", authController.registerUser); //* in the name authcontroller there is one

module.exports = router;
