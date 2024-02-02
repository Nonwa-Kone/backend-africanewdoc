require("dotenv").config();
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      validate(v) {
        if (!validator.isEmail(v)) {
          throw new Error("Invalid email");
        }
      },
    },
    password: {
      type: String,
      trim: true,
      required: [true, "password is required"],
    },
    authTokens: [
      {
        authToken: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

userSchema.methods.toJSON = function () {
  const user = this.toObject();

  delete user.password;
  delete user.authTokens;

  return user;
};

userSchema.methods.generateAutTokenAndSaveUser = async function () {
  const authToken = jwt.sign(
    { _id: this._id.toString(), username: this.username, email: this.email },
    process.env.SECRET_TOKEN,
    { expiresIn: "1d" }
  );

  this.authTokens.push({ authToken });

  await this.save();

  return authToken;
};

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
