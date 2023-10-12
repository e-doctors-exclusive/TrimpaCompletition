const { Sequelize, DataTypes, HasMany } = require("sequelize");


const connection = new Sequelize("flightapp", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});


connection
  .authenticate()
  .then(() => console.log("connection established"))
  .catch(() => console.log("connection rejected"));

const User = require("../model/user.model")(connection, DataTypes);
const Flights = require("../model/flights.model")(connection, DataTypes);
const Admin = require("../model/admin")(connection,DataTypes)
const Reservation = require("../model/reservation.model")(connection,DataTypes)
const Payments = require("../model/payment.model")(connection,DataTypes)
const Seats = require("../model/seats.model")(connection,DataTypes)


Flights.hasMany(Reservation);
Reservation.belongsTo(Flights);

Flights.hasMany(Seats);
Seats.belongsTo(Flights);

Seats.hasOne(Reservation);
Reservation.belongsTo(Seats);

Reservation.hasOne(Payments);
Payments.belongsTo(Reservation);

User.belongsToMany(Flights, { through: 'User_Flights' });

const db ={}
db.User = User;
db.Flights = Flights;
db.Admin  = Admin
db.Reservation  = Reservation
db.Payments = Payments
db.Seats = Seats
db.Seats = Seats

module.exports = db

// connection
//   .sync({ alter: true, force: true })
//   .then(() => console.log("tables created"))
//   .catch(() => console.log("error creating tables"));
