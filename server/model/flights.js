const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Flights = sequelize.define("Flights",
    {destOut: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      destIn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateOut: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      dateIN: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      availableSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }
);
  return Flights;
};
