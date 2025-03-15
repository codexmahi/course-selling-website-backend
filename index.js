const express = require("express");
const { courseRouter } = require("./routes/course");
const { userRouter } = require("./routes/user");

const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Promise Rejection:", err);
});


