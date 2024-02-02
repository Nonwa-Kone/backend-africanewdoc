const User = require("../models/user");
const bcrypt = require("bcrypt");

// Verification si un utilisateur est connecté

module.exports.signup = async (req, res, next) => {
  const user = new User(req.body);
  try {
    // await user.save();
    const authToken = await user.generateAutTokenAndSaveUser();
    res.status(201).json({ user, authToken });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Error, unable to log in");
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      throw new Error("password is incorrect");
    }

    const authToken = await user.generateAutTokenAndSaveUser();
    res.cookie("token", authToken);

    res.status(201).json("Succes");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.profile = (req, res, next) => {
  return res.json({ id: req.id, email: req.email, username: req.username });
};

module.exports.logout = (req, res) => {
  res.clearCookie("token");
  res.json("Success");
};
