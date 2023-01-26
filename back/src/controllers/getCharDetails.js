const axios = require("axios");

const getCharDetail = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const obj = {
        image: response.data.image,
        name: response.data.name,
        gender: response.data.gender,
        status: response.data.status,
        origin: response.data.origin,
        species: response.data.species,
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

module.export(getCharDetail);
