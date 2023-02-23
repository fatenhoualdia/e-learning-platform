const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("name", "name is required").notEmpty(),
  // check("lastname", "lastname is required").notEmpty(),
  check("email", "email is required").notEmpty(),
  check("email", "check email again").isEmail(),
  check("password", "password must be  between 6 and 12 character").isLength({
    min: 6,
    max: 12,
  }),
];

exports.loginRules = () => [
  check("email", "email is required").notEmpty(),
  check("email", "check email again").isEmail(),
  check("password", "password must be  between 6 and 12 character").isLength({
    min: 6,
    max: 12,
  }),
];
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array().map((e) => ({
        msg: e.msg,
      })),
    });
  }
  next();
};

