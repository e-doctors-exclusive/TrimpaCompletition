const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Reservation = sequelize.define("Reservation",
    {firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Ephone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numberOfBags: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }
);
  return Reservation;
};
