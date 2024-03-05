const axios = require("axios");
const { Genre } = require("../db");

const postGenre = async () => {
  try {
    const consultGetApi = await axios.get("https://api.rawg.io/api/genres?key=8d090fd5b10e485f8e8c00e4988b10a6");
    const genresApi = consultGetApi.data.results;

    genresApi.map(async (g) => {
      await Genre.findOrCreate({
        where: { name: g.name },
        defaults: {
          id: g.id,
          name: g.name,
        },
      });
    });

    const allGenres = await Genre.findAll();
    return allGenres;
  } catch (error) {
    console.log(error);
  }
};

module.exports = postGenre;
