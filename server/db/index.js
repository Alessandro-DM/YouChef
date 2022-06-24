//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Chefs = require("./models/Chefs");
const HireCart = require("./models/HireCart");
const HiredChefs = require("./models/HiredChefs");

//associations could go here!
User.hasMany(HireCart);
HireCart.belongsTo(User);

Chefs.belongsToMany(HireCart, { through: HiredChefs });
HireCart.belongsToMany(Chefs, { through: HiredChefs });

module.exports = {
  db,
  models: {
    User,
    Chefs,
    HireCart,
    HiredChefs,
  },
};

