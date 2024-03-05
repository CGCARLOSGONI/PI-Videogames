const axios = require("axios");
//const { processGame } = require('../controllers/dataHelpers')
//const URL = `https://api.rawg.io/api/games/${name}?key=8d090fd5b10e485f8e8c00e4988b10a6`
const URL = "https://api.rawg.io/api/games";
const API_KEY = "8d090fd5b10e485f8e8c00e4988b10a6";

//let allName = [];

const getName = async (name) => {
  const videogamesByName = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
 //
  const byName = videogamesByName.data.results.flatMap((res) => ({
    key: res.id,
    id: res.id,
    name: res.name,
    description: res?.description || "Description not available",
    platforms: res.platforms?.map((platform) => platform.platform.name),
    background_image: res.background_image,
    released: res.released,
    rating: res.rating,
    genres: res.genres?.map((genre) => genre.name).join(", "),
  }));
  //allName.push(videogamesByName);
  return byName;
};

module.exports = getName;
