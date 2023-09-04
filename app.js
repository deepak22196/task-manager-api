const express = require("express");
const app = express();

const taskRouter = require("./routes/taskRouter");
const connectDB = require("./db/connect");

require("dotenv").config();

const port = 8000;

app.use("/api/v1/tasks", taskRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () => {
      console.log("server is running on port:", port);
    });
  } catch (error) {
    console.log("error---->", error);
  }
};

start();
