// const express = require("express");
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World"));

app.listen(port, () => {
  console.log(`
  ■  localhost:${port}/
  ■  127.0.0.1:${port}/`);
});
