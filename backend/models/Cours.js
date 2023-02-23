const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CoursSchema = new Schema({
  nameCours: {
    type: String,
    required: true,
  },
  domaine: {
    type: String,
    required: true,
  },
  cycle: {
    type: String,
    // required: true,
  },
  enseignant: {
    type: String,
    // required: true,
  },
  isFree: {
    type: String,
  },
  certifier: {
    type: String,
  },

  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  photo: {
    type: String,
    default: "https://cdn.picpng.com/book/book-transparent-30963.png",
    required: false,
  },
  nbrPartic: {
    type: Number,
  },
  participants: [],
  modules: [],
  reviews: [],
  ratings: [],
});
module.exports = mongoose.model("Cours", CoursSchema);

