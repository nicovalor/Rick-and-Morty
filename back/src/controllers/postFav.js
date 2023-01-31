const postFav = (image, name, gender, status, species, origin, id) => {
  if (!image || !name || !gender || !status || !species || origin) {
    throw Error("Es necesario proveer todos los details del personaje");
  }
  const obj = {
    image,
    name,
    gender,
    status,
    spcies,
    origin,
    id,
  };
  return obj;
};

module.exports = postFav;
