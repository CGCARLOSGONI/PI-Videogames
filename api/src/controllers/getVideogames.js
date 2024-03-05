const axios = require("axios");
const { Videogame, Genre } = require("../db");

const URL = `https://api.rawg.io/api/games?key=8d090fd5b10e485f8e8c00e4988b10a6`;

const getVideogames = async (orderAlphabetic, genreName, source) => {
  let allVideogames = [];
  if (source === "DB") {
    const videogamesDB = await Videogame.findAll({
      include: {
        model: Genre,
      },
    });
    allVideogames.push(...videogamesDB);

    console.log("genreName", genreName, allVideogames[0]);
  } else if (source === "API") {
    const videogamesFromApi = await getApiVideogames(100, [], URL);
    allVideogames.push(...videogamesFromApi);
  } else {
    const videogamesDB = await Videogame.findAll({
      include: {
        model: Genre,
      },
    });
    allVideogames.push(...videogamesDB);
    const videogamesFromApi = await getApiVideogames(100, [], URL);
    allVideogames.push(...videogamesFromApi);
  }

  if (genreName) {
    allVideogames = allVideogames.filter((videogame) => videogame?.genres?.includes(genreName) || !!videogame?.Genres?.find((genre) => genre.name === genreName));
  }

  // Aplicar ordenamiento según sea necesario
  if (orderAlphabetic === "ASC") {
    allVideogames = allVideogames.sort((a, b) => a.name.localeCompare(b.name));
  } else if (orderAlphabetic === "DESC") {
    allVideogames = allVideogames.sort((a, b) => b.name.localeCompare(a.name));
  } else if (orderAlphabetic === "rating-ASC") {
    allVideogames = allVideogames.sort((a, b) => a.rating - b.rating);
  } else if (orderAlphabetic === "rating-DESC") {
    allVideogames = allVideogames.sort((a, b) => b.rating - a.rating);
  }

  return allVideogames;
};

const getApiVideogames = async (limit = 100, videogames, url) => {
  const apiResponse = await axios.get(`${url}`);
  const apiData = apiResponse.data.results.flatMap((video) => ({
    key: video.id,
    id: video.id,
    name: video.name,
    description: video?.description || "Descripción no disponible",
    platforms: video.platforms?.map((platform) => platform.platform.name) || [],
    background_image: video.background_image,
    released: video.released,
    rating: video.rating,
    genres: video.genres?.map((genre) => genre.name).join(", ") || [],
  }));
  const allVideogames = [...videogames, ...apiData];
  if (allVideogames.length < limit) {
    return getApiVideogames(limit, allVideogames, apiResponse.data.next);
  }
  return allVideogames;
};

module.exports = getVideogames;
