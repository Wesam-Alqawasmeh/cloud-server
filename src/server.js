"use strict";

const express = require("express");

const app = new express();

app.get("/", (req, res) => {
  res.status(200).send("How Are You Doing 🤑");
});

app.use(express.static("./public"));

function start(PORT) {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}

module.exports = { start: start };
