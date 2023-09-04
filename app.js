const express = require("express");
const app = express();

const port = 8000;

app.get("/", (req, res) => {
  res.send("server is working fine ");
});

app.listen(port, () => {
  console.log("server is running on port:", port);
});
