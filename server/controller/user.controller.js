const { User } = require("../database/index.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.signup = async (req, res) => {
  try {
    const { email, password, name, phone } = req.body;
    bcrypt
      .hash(password, 10)
      .then((hashedPassword) => {
        User.create({
          name,
          email: email ? email : null,
          password: hashedPassword,
          phone: phone ? phone : null,
        })
          .then((result) => {
            res
              .status(201)
              .json({ message: " user created successfully", result });
          })
          .catch((err) => {
            res.status(404).json({ message: "error creating user", err });
          });
      })
      .catch((e) => {
        res.status(404).json({ message: "error hashing the password", e });
      });
  } catch (e) {
    throw e;
  }
};

module.exports.login = async (req, res) => {
  try {
    const { phone, email, password } = req.body;
    let user;
    if (phone) {
      user = await User.findOne({ where: { phone } });
    } else if (email) {
      user = await User.findOne({ where: { email } });
    } else {
      res.status(404).json({ message: "user not found" });
    }
    bcrypt
      .compare(password, user.password)
      .then((checked) => {
        if (checked) {
          const Token = jwt.sign(
            {
              userId: user.id,
              password: password,
            },
            "secret",
            { expiresIn: "24h" }
          );
          res.status(200).json({
            message: "login successful",
            user: { ...user, token: Token },
          });
        } else {
          res.status(403).json({ message: "wrong password" });
        }
      })
      .catch((e) => {
        res.status(404).json({ message: "error comparing password", e });
      });
  } catch (e) {
    res.status(404).json({ message: "cannot login", e });
  }
};

module.exports.getAll = async (req, res) => {
  try {
      const getAll = await User.findAll({})
      res.status(200).send(getAll)
  } catch (error) {
      throw new Error(error)
  }
};
