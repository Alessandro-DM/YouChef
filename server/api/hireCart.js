const router = require("express").Router();
const {
  models: { HireCart, Chefs, User, HiredChefs },
} = require("../db");
const { requireToken, isAdmin } = require("./gateKeeperMiddleware");

router.get("/", requireToken, isAdmin, async (req, res) => {
  try {
    const user = await User.findByPk(req.headers.user);

    const pendingHiring = await HireCart.findOne({
      where: {
        userId: user.id,
        status: "Pending",
      },
      include: [{ model: Chefs }],
    });

    if (!pendingHiring) {
      res.send([]);
    } else {
      const returnData = pendingHiring.chefs.map((chef) => {
        return {
          id: chef.id,
          firstName: chef.firstName,
          lastName: chef.lastName,
          email: chef.email,
          city: chef.city,
          address: chef.address,
          state: chef.state,
          pricePerHour: chef.pricePerHour,
          foodType: chef.foodType,
          ratings: chef.ratings,
        };
      });

      res.send(returnData);
    }
  } catch (err) {
    console.error(err);
  }
});

router.get("/hireCart", requireToken, isAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.headers.id);
    console.log("user", req.headers.id);
    const hireCarts = await HireCart.findAll({
      where: {
        userId: user.id,
      },
      include: {
        model: Chefs,
        attributes: ["id", "pricePerHour"],
      },
    });
    res.send(hireCarts);
  } catch (err) {
    next(err);
  }
});

router.post("/", requireToken, isAdmin, async (req, res) => {
  try {
    const user = await User.findByPk(req.headers.user, {
      include: [{ model: HireCart }],
    });

    const pendingHiring = user.hireCarts.find((hireCart) => hireCart.status === "Pending");

    let hireCart;
    if (!pendingHiring) {
      hireCart = await user.createHireHireCart();
    } else {
      hireCart = pendingHiring;
    }

    const chef = await Chefs.findByPk(req.body.chef.id);
    await HiredChefs.create({
      chefId: chef.id,
      hireCartId: hireCart.id,
    });
    const cart = await hireCart.getChefs();

    res.send({ chef, cart });
  } catch (err) {
    console.error(err);
  }
});

router.delete("/:id", requireToken, isAdmin, async (req, res) => {
  try {
    const user = await User.findByPk(req.headers.user, {
      include: [{ model: HireCart }],
    });

    const pendingHiring = user.hireCarts.find((hireCart) => hireCart.status === "Pending");

    const chefs = await pendingHiring.getChefs({
      where: { id: req.params.id },
    });
    await pendingHiring.removeChef(chefs[0]);

    res.send(pendingHiring);
  } catch (err) {
    console.error(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.headers.user, {
      include: [{ model: Order }],
    });

    const pendingOrder = user.orders.find((order) => order.status === "Pending");

    const cartItem = await OrderItem.findOne({
      where: {
        productId: req.params.id,
        orderId: pendingOrder.id,
      },
    });

    await cartItem.update({
      qty: req.body.qty,
    });

    const product = await Product.findByPk(req.params.id);

    res.send({ product, cart: pendingOrder });
  } catch (err) {
    console.error(err);
  }
});


module.exports = router;
