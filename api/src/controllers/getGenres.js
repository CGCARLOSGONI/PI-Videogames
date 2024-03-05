const axios = require("axios");
const { Genre } = require("../db");

const getGenres = async () => {
  try {
    const allGenres = await Genre.findAll();
    return allGenres;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getGenres;
