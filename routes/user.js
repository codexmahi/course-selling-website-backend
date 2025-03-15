const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", function (req, res) {
  res.json({
    message: "Signup endpoint!",
  });
});

userRouter.post("/signin", function (req, res) {
  res.json({
    message: "Signin endpoint!",
  });
});

userRouter.get("/purchases", function (req, res) {
  res.json({
    message: "Here are your purchases!",
  });
});

module.exports = {
  userRouter: userRouter,
};
