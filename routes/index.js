const express = require("express");
const { courseRouter } = require("./course");
const { userRouter } = require("./user");

const app = express();

app.use("/api/v2/user", userRouter);
app.use("/api/v2/course", courseRouter);

app.listen(3000);

