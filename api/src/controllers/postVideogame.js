const { Videogame } = require("../db");

const postVideogame = async (data, genres) => {
  try {
    const newVideogame = await Videogame.create(data); 
    await newVideogame.addGenres(genres); 
    return newVideogame;
  } catch (e) {
    console.log("Hubo un error: ", e);
  }
};

module.exports = postVideogame;
