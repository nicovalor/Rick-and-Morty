const getCharById = require("./controllers/getCharById");
const getCharDetails = require("./controllers/getCharDetails");
const postFav = require("./controllers/postFav");

let fav = [];

const express = require("express");
const app = express();
//app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
//app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json());

app.get("/get/rickandmorty/character/:id", (req, res) => {
  const { id } = req.params;
  const info = getCharById(id);
  try {
    res.status(200).json(info);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/get/rickandmorty/detail/:id", (req, res) => {
  const { id } = req.params;
  const info = getCharDetails(id);
  try {
    res.status(200).json(info);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/get/rickandmorty/fav", (req, res) => {
  res.status(200).json(fav);
});

app.post("/post/rickandmorty/fav", (req, res) => {
  const { image, name, gender, status, species, origin, id } = req.body;
  try {
    const info = postFav(image, name, gender, status, species, origin, id);
    fav.push(info);
    res.status(200).send("Character agregado a favoritos");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/delete/rickandmorty/fav/:id", (req, res) => {
  const { id } = req.params;
  try {
    fav = fav.filter((char) => char.id !== id);
    res.status(200).send("Character quitado de favoritos");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = app;
