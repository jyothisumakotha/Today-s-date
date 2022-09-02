const express = require("express");
const app = express();
app.get("/", (request, response) => {
  let date = new Date();
  let dd = date.getDate();
  let mm = date.getMonth();
  let yyyy = date.getFullYear();
  let result = `${dd}-${mm}-${yyyy}`;
  response.send(result);
});

module.exports = app;
