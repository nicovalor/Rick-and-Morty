const express = require("express");
const axios = require("axios");

const app = express();

app.get("/rickandmorty/character/:id", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { id } = req.params;
  try {
    const response = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const info = response.data;
    const characterInfo = {
      id: info.id,
      name: info.name,
      gender: info.gender,
      species: info.species,
      image: info.image,
    };
    res.status(200).json(characterInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/rickandmorty/detail/:id", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { id } = req.params;
  try {
    const response = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const info = response.data;
    const detailInfo = {
      image: info.image,
      name: info.name,
      gender: info.gender,
      status: info.status,
      origin: info.origin.name,
      species: info.species,
    };
    res.status(200).json(detailInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const fav = [];

app.get("/rickandmorty/fav", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(fav);
});

app.post("/rickandmorty/fav", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  //   const { image, name, gender, status, species, origin, id } = req.body;
  try {
    // const favDetails = req.body;
    fav.push(req.body);
    res.status(200).send("Favorito agregado correctamente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete("/rickandmorty/fav/:id", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { id } = req.params;
  const filteredFavs = fav.filter((char) => char.id !== id);
  fav = filteredFavs;
  res.status(200).send("Se elimino el favorito correctamente");
});

module.exports = app;
