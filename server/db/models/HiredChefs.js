const Sequelize = require("sequelize");
const db = require("../db");

const HiredChefs = db.define("hiredChef", {
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

module.exports = HiredChefs;

//OrderItem