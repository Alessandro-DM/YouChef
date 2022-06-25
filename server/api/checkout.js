const router = require("express").Router();
const { models: { HireCart, User, Chefs } } = require("../db");
const { requireToken } = require("./gateKeeperMiddleware");

router.post("/", requireToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.headers.user);

    const hireCart = await HireCart.findOne({
      where: {
        userId: user.id,
        status: "Pending",
      },
      include: [{ model: Chefs }],
    });

    await hireCart.update({
      status: "Hired",
    });

    res.send(hireCart);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;