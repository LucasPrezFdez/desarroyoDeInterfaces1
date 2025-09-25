//const express = require("express");
import express from "express";
import dotenv from "dotenv";

let PORT = process.env.PORT;
let nombre = "Lucas";
const app = express();

app.get("/saluda", greet);
app.get("/", start);

function start(req, res) {
  res.send("Hola desde express");
}

function greet(req, res) {
  console.log("Hola Mundo");
  res.send("Hola Mundo!!!!!");
}

app.listen(3000, () => console.log("Servidor arrancado en el puerto" + PORT));
