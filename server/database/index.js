const { Sequelize, DataTypes } = require("sequelize");

const connection = new Sequelize("flightapp", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});


connection
  .authenticate()
  .then(() => console.log("connection established"))
  .catch(() => console.log("connection rejected"));

const User = require("../model/user.model")(connection, DataTypes);
const Flights = require("../model/flights")(connection, DataTypes);
const Admin = require("../model/admin")(connection,DataTypes)
const Reservation = require("../model/reservation.model")(connection,DataTypes)
const Payments = require("../model/payment.model")(connection,DataTypes)



connection
  .sync({ alter: true, force: true })
  .then(() => console.log("tables created"))
  .catch(() => console.log("error creating tables"));


const db ={}
db.User = User;
db.Flights = Flights;
db.Admin  = Admin
db.Reservation  = Reservation
db.Payments = Payments

module.exports = db