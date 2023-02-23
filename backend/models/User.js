

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  adresse: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default:
      "https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-vector-id846183008?k=20&m=846183008&s=170667a&w=0&h=WIxZSP7aJ9jSvW3xqzDsWSI5g666kVBBgCNkABzYs68=",
    required: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});


//methode comapraison
UserSchema.methods.comparePassword = function (candidatePassword) {
  //pour faire refernce a l'objet actuel

  const user = this;
  //fonction bech tched chwaya wa9t fel execution(promise) resolve satisfait , promise totleb mel bcrytp bech tcompari el condpas w userpawws
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) {
        //rejectte el promise//champ mdp fere8

        return reject(err);
      }
      if (!isMatch) {
        return reject(err);
      }

      if (isMatch) {
      }
      resolve(true);
    });
  });
}; //je créer un shemin mais me5rajtch model comme plan

module.exports = mongoose.model("User", UserSchema);
