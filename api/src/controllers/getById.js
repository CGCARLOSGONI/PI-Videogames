const axios = require("axios");

const getById = async (idVideogames) => {
  const videogameById = await axios.get(
    `https://api.rawg.io/api/games/${idVideogames}?key=8d090fd5b10e485f8e8c00e4988b10a6`
  );
  const res = videogameById.data;
  const byId = {
    key: res.id,
    id: res.id,
    name: res.name,
    description: res?.description || "Description not available",
    platforms: res.platforms?.map((platform) => platform.platform.name),
    background_image: res.background_image,
    released: res.released,
    rating: res.rating,
    genres: res.genres?.map((genre) => genre.name),
  };
  return byId;
};

module.exports = getById;
