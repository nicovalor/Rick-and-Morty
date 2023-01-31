const axios = require("axios");

const getCharDetails = (id) => {
  if (!id) {
    throw Error("Es necesario un id por params");
  }
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      response.data;
    })
    .then((data) => {
      const obj = {
        image: data.image,
        name: data.name,
        gender: data.gender,
        status: data.status,
        origin: data.origin.name,
        species: data.species,
      };

      return obj;
    })
    .catch((err) => {
      throw Error(err.message);
    });
};

module.export = getCharDetails;
