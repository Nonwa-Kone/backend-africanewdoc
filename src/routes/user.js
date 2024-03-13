require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { signup, login, profile, logout } = require("../controllers/user");

const userRoute = express.Router();

const verifyUser = (req, res, next) => {
  // On réccuppère le token utilisateur
  const token = req.cookies.token;
  // On verifie si le token s'existe pas alors
  if (!token) {
    // On renvoie un message d'erruer
    return res.json("The token is missing");
  } else {
    // Sinon on verifie si le token est egal au token enregistrer sur le serveur
    jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
      // En cas d'erreur
      if (err) {
        // On retourne un message d'erreur
        return res.json("Then token is wrong");
      } else {
        // Sinon on reccuppère l'e-mail et username de l'utilisateur
        req.id = decoded._id;
        req.email = decoded.email;
        req.username = decoded.username;
        // On passe au middleware suivant
        next();
      }
    });
  }
};

userRoute.get("/users/", verifyUser, profile);
userRoute.post("/users/signup", signup);
userRoute.post("/users/login", login);
userRoute.get("/users/logout", logout);

module.exports = userRoute;
