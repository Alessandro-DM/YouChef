const router = require("express").Router();
const { models: { Chefs, User } } = require("../db");
const { requireToken, isAdmin } = require("./gateKeeperMiddleware");

router.get("/", requireToken, async (req, res, next) => {
  try {
    const chefs = await Chefs.findAll();
    res.send(chefs);
  } catch (err) {
    next(err);
  }
});

router.post("/", requireToken, async (req, res, next) => {
  try {
    const user = await User.findByToken(req.body.token);
    if (user && user.isAdmin === true) {
      const chef = await Chefs.create(req.body.chef);
      res.send(chef);
    } else next();
  } catch (err) {
    next(err);
  }
});

router.get("/:id", requireToken, async (req, res, next) => {
  try {
    const chef = await Chefs.findByPk(`${req.params.id}`);
    res.send(chef);
  } catch (err) {
    next(err);
  }
});

router.put("/:chefID", requireToken, async function (req, res, next) {
  try {
    const user = await User.findByToken(req.body.token);
    if (user && user.isAdmin) {
      const chef = await Chefs.findByPk(req.params.chefID);
      const result = await chef.update(req.body);
      res.send(result);
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:chefID", requireToken, isAdmin, async function (req, res, next) {
  try {
    const user = await User.findByToken(req.body.token);
    if (user && user.isAdmin) {
      const chef = await Chefs.findByPk(req.params.chefID);
      const result = await chef.destroy();
      res.send(result);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
