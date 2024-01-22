const express = require("express");
const User = require("../models/user");

const userRoute = express.Router();

userRoute.post("/users/signup", async (req, res, next) => {
  const user = new User(req.body);
  try {
    await user.save();
  } catch (error) {}
});

module.exports = userRoute;
