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

const User = require("../model/user.model")(connection, DataTypes);
const Flights = require("../model/flights")(connection, DataTypes);


const db ={}
db.User = User;
db.Flights = Flights;



module.exports = db