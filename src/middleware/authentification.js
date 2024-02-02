const jwt = require("jsonwebtoken");
const User = require("../models/user");

//request> verify > route

/*
Cette fonction permet d'authentifier un utilisateur 
sur le site ou l'application
*/
const authentification = async (req, res, next) => {
  try {
    // on reccuppère le token d'authorisation
    const authToken = req.header("Authorization").replace("Bearer ", "");
    // On verifie le token reccuppère par le token stocker sur le serveur
    const decodedToken = jwt.verify(authToken, "foo");
    // On recherche un utilisateur par son id et le token
    const user = await User.findOne({
      _id: decodedToken._id,
      "authTokens.authToken": authToken,
    });
    // Si l'utilisateur n'est pas trouver on declenche un message d'Erreur
    if (!user) {
      throw new Error("");
    }
    // On stocke l'utilisateur dans la variable req.user
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send("Merci de vous authentifié!");
  }
};

module.exports = authentification;
