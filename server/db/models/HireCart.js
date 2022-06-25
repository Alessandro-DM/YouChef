const Sequelize = require("sequelize");
const db = require("../db");

const HireCart = db.define("hireCart", {
  status: {
    type: Sequelize.ENUM("Pending", "Cancelled", "Hired"),
    allowNull: false,
    defaultValue: "Pending",
  },
});

module.exports = HireCart;

//Order