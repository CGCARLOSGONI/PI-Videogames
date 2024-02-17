const axios = require("axios");
const URL = `https://api.rawg.io/api/games?key=8d090fd5b10e485f8e8c00e4988b10a6`;

const getVideogames = async () => {
  const videogamesFromApi = await axios.get(URL);
  const allVideogames = videogamesFromApi.data.results.map((video) => ({
    key: video.id,
    id: video.id,
    name: video.name,
    description: video.description || "Descripción no disponible",
    platforms: video.platforms?.map((platform) => platform.platform.name),
    background_image: video.background_image,
    released: video.released,
    rating: video.rating,
    genres: video.genres?.map((genre) => genre.name),
  }));
  return allVideogames;
};

module.exports = getVideogames;
