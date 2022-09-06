const express = require("express");
const addDays=require("date-fns/addDays");
const app = express();
app.get("/", (request, response) => {
  const output=new Date();
  const result=addDays(new Date(output.getFullYear(),output.getMonth(),output.getDate()),100);
  response.send(`${result}`);
});

module.exports = app;
