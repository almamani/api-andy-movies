const express = require("express");
const fs = require("fs");

const app = express();

const readData = () => {
  try {
    const data = fs.readFileSync("./movies.json");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

readData();

app.get("/", (req, res) => {
  res.send("Hola Mundo desde Express, sigue funcando!");
});

app.get("/movies", (req, res) => {
  const data = readData();
  res.json(data.movies);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
