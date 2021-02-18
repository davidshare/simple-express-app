const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("listening on 3000");
});

app.get("/", (req, res) => {
  res.send("Welcome to my simple express app.");
});

app.post("/welcome/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Welcome ${name} to my simple express app.`);
});