const express = require("express");
const Cours = require("../models/Cours");

// initialisation
const CoursRouter = express.Router();
// find all users
// method GET
// path
CoursRouter.get("/all", async (req, res) => {
  try {
    let result = await Cours.find();
    res.send({ result, msg: " All users" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

CoursRouter.get("/:id", async (req, res) => {
  try {
    let result = await Cours.findById({ _id: req.params.id });
    res.send({ result, msg: " get one" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});
// add
// method POST
// path
// body {nameCours,domaine}
CoursRouter.post("/add", async (req, res) => {
  try {
    let newCours = new Cours({ ...req.body });
    let result = await newCours.save();
    res.send({ result, msg: "sucefuly aded" });
    console.log(result);
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});
// delete
// method delete
// path
// body {name,email,phone}
CoursRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Cours.findOneAndRemove({
      _id: req.params.id,
    });
    res.send({ msg: " delete cours" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});
// update
CoursRouter.put("/nbr/:id", async (req, res) => {
  try {
    let result = await Cours.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      { $push: { participants: req.body } }
    );
    res.send({ msg: " participant added updated" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

CoursRouter.put("/rate/:id", async (req, res) => {
  console.log(req.body.rate);
  try {
    let result = await Cours.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      { $push: { ratings: req.body.rate } }
    );
    res.send({ msg: " your rating est succefully submitted" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

module.exports = CoursRouter;
