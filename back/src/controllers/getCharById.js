const axios = require("axios");

const getCharById = (id) => {
  if (!id) {
    throw Error("Es necesario un id");
  }
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.data)
    .then((data) => {
      const obj = {
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        id: data.id,
      };
      return obj;
    })
    .catch((err) => {
      throw Error(err.message);
    });
};

module.export = getCharById;
