const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const getAllChars = require("../controllers/getAllChars");

app.use(cors());
app.use(express.json());

app.get("/rickandmorty/allCharacters", async (req, res) => {
  try {
    const allCharacters = await getAllChars();

    res.status(200).json(allCharacters);
  } catch (error) {
    res.status(404).send("Hubo un problemilla");
  }
});

app.get("/rickandmorty/character/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = response.data;

    const infoCharacter = {
      id: data.id,
      name: data.name,
      species: data.species,
      gender: data.gender,
      image: data.image,
    };

    res.status(200).json(infoCharacter);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/rickandmorty/detail/:detailId", async (req, res) => {
  try {
    const { detailId } = req.params;

    const { data } = await axios(
      `https://rickandmortyapi.com/api/character/${detailId}`
    );

    const infoCharacterDetail = {
      name: data.name,
      status: data.status,
      species: data.species,
      gender: data.gender,
      origin: data.origin,
      image: data.image,
    };

    res.status(200).json(infoCharacterDetail);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

let fav = [];

app.get("/rickandmorty/fav", async (req, res) => {
  try {
    const allFavorites = await getAllFavorites();

    if (allFavorites.error) throw new Error(allFavorites.error);

    return res.status(200).json(allFavorites);
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

app.post("/rickandmorty/fav", async (req, res) => {
  try {
    const characterFav = await postFav(req.body);

    if (characterFav.error) throw new Error(characterFav.error);

    res.status(200).json(characterFav);
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

app.delete("/rickandmorty/fav/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteFavorite = await deleteFavoriteById(parseInt(id));

    if (deleteFavorite.error) throw new Error(deleteFavorite.error);

    return res.status(200).send(deleteFavorite);
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

module.exports = app;
