const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Flights = sequelize.define("Flights",
    {destFrom: {
        type: DataTypes.STRING,
        allowNull: false
      },
      destTo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dateFrom: {
        type: DataTypes.DATE,
        allowNull: false
      },
      dateTo: {
        type: DataTypes.DATE,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
      
    }
);
  return Flights;
};
