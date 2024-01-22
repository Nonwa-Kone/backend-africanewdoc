const express = require("express");
const User = require("../models/user");
const { signup, login } = require("../controllers/user");

const userRoute = express.Router();

userRoute.post("/users/signup", signup);
userRoute.post("/users/login", login);

module.exports = userRoute;
