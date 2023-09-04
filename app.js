const express = require("express");
const app = express();

const taskRouter = require("./routes/taskRouter");

const port = 8000;

app.use("/api/v1/tasks", taskRouter);

app.listen(port, () => {
  console.log("server is running on port:", port);
});
