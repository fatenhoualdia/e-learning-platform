const express = require("express");
const Message = require("../models/message");

// initialisation
const MessageRouter = express.Router();
MessageRouter.get("/all", async (req, res) => {
  try {
    let result = await Message.find();
    res.send({ result, msg: " All message" });
  } catch (error) {
    console.log(error);  
    res.send({ msg: "fail" });
  }
});
MessageRouter.post("/add", async (req, res) => {
  try {
    let newMsg = new Message({ ...req.body });
    let result = await newMsg.save();
    res.send({ result, msg: "succefully sent" });
    console.log(result);
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

MessageRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Message.findOneAndRemove({
      _id: req.params.id,
    });
    res.send({ msg: " delete message" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

module.exports = MessageRouter;

