const { Sequelize, DataTypes } = require("sequelize");

const connection = new Sequelize("flightapp", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

// connection
//   .sync({ alter: true, force: true })
//   .then(() => console.log("tables created"))
//   .catch(() => console.log("error creating tables"));

connection
  .authenticate()
  .then(() => console.log("connection established"))
  .catch(() => console.log("connection rejected"));

const User = require("../models/user.model")(connection, DataTypes);



const db ={}
db.User = User;




module.exports = db