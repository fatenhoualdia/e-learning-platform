const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  registerRules,
  loginRules,
  validation,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport");

// register
router.post("/register", registerRules(), validation, async (req, res) => {
  const { name, lastname, email, password, isAdmin, photo } = req.body;
  try {
    const newUser = new User({
      name,
      lastname,
      email,
      password,
      isAdmin,
      photo,
    });

    // check if the email exist
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "user already exist" });
    }
    // hash password
    const salt = 10;
    const genSalt = bcrypt.genSaltSync(salt);
    const hashedPassword = bcrypt.hashSync(password, genSalt);
    newUser.password = hashedPassword;

    // generate a token

    // save the user
    const newUserToken = await newUser.save();
    const payload = {
      _id: newUserToken._id,
      name: newUserToken.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 100000,
    });
    res.status(200).send({
      user: newUserToken,
      msg: "user saved..",
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(500).send(" can not save the user...");
  }
});
// login
router.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    // find if the user exist
    const searchedUser = await User.findOne({ email });
    // if the email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "this email address doesn't exist" });
    }
    // password are equals
    await searchedUser.comparePassword(password);
    console.log(password, searchedUser.password);

    // creer un token
    const payload = {
      _id: searchedUser.id,
      name: searchedUser.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 100000,
    });

    // send the user
    res
      .status(200)
      .send({ user: searchedUser, msg: "success", token: `Bearer ${token}` });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ msg: "wrong password" });
  }
});

router.get("/current", isAuth(), (req, res) => {
  res.status(200).send({ user: req.user });
});

// router.get("/", (req, res) => {
//   res.send("hello word");
// });

router.get("/all", async (req, res) => {
  try {
    let result = await User.find();
    res.send({ result, msg: " All users" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

//update users
router.put("/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ newUser: result, msg: "user updated.." });
  } catch (error) {
    res.status(500).send("cannot update the user..");
    console.log(error);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    let result = await User.findOneAndRemove({
      _id: req.params.id,
    });
    res.send({ msg: " delete message" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

module.exports = router;

