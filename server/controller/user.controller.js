const { User } = require("../database/index.js");
const bcrypt = require("bcrypt");

module.exports.signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    bcrypt
      .hash(password, 10)
      .then((hashedPassword) => {
        User.create({ name, email, password: hashedPassword })
          .then((result) => {
            res.status(201).json({ message: " user created successfully" , result});
          })
          .catch((err) => {
            res.status(404).json({ message: "error creating user" , err});
          });
      })
      .catch((e) => {
        res.status(404).json({ message: "error hashing the password",  e });
      });
  } catch (e) {
    throw e;
  }
};
