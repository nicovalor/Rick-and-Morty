const axios = require("axios");

const getCharById = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => {
      const obj = {
        image: res.data.image,
        name: res.data.name,
        gender: res.data.gender,
        species: res.data.species,
      };
      return obj;
    })
    .then((obj) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(obj));
    })
    .catch((err) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(err.message);
    });
};

module.export = { getCharById };
