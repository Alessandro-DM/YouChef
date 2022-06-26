const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/chefs", require("./chefs"));
// router.use("/hireCart", require("./hireCart"));
// router.use("/checkout", require("./checkout"));
// router.use("/payment", require("./payment"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

