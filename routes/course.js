const { Router } = require("express");

const courseRouter = Router();


courseRouter.post("/course/purchase", function (req, res) {
    res.json({
      message:"signup endpoint"
  })
});

courseRouter.post("/course/preview", function(req, res) {
    res.json({
      message:"signup endpoint"
  })
});

module.exports = {
   courseRouter:courseRouter
}