const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const MessageSchema = new Schema({
  from: {
    type: String,
  },
  name: {
    type: String,
  },
  to: {
    type: String,
  },
  message: {
    type: String,
  },
});
module.exports = mongoose.model("Message", MessageSchema);
