const axios = require("axios");
const { Videogame, Genre } = require("../db");

const URL = "https://api.rawg.io/api/games";
const API_KEY = "8d090fd5b10e485f8e8c00e4988b10a6";

const getById = async (idVideogame) => {
  console.log(idVideogame);
  let byId;

  try {
    if (!isNaN(idVideogame)) {
      const res = await axios.get(`${URL}/${idVideogame}?key=${API_KEY}`);

      console.log("idVideogame", idVideogame);

      byId = {
        key: res.data.id,
        id: res.data.id,
        name: res.data.name,
        description: res.data.description || "Description not available",
        platforms: res.data.platforms?.map((platform) => platform.platform.name),
        background_image: res.data.background_image,
        released: res.data.released,
        rating: res.data.rating,
        genres: res.data.genres?.map((genre) => genre.name).join(", "),
      };
    } else {
      const videoGame = await Videogame.findOne({
        where: {
          id: idVideogame,
        },
        include: {
          model: Genre,
        },
      });
      
      if (videoGame) {
        byId = {
          key: videoGame.id,
          id: videoGame.id,
          name: videoGame.name,
          description: videoGame.description || "Description not available",
          platforms: videoGame.platforms,
          background_image: videoGame.background_image,
          released: videoGame.released,
          rating: videoGame.rating,
          genres: videoGame.Genres?.map((genre) => genre.name).join(", "),
        };
      }
    }
  } catch (error) {
    console.error(error);
  }

  return byId;
};

module.exports = getById;
